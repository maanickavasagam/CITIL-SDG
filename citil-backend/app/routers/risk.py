from fastapi import APIRouter, Depends
from app.models.schemas import AssessmentCreate, AssessmentOut
from app.database import supabase
from app.auth_utils import get_current_user
from app.risk_engine import calculate_risk

router = APIRouter()


@router.post("/risk", response_model=dict)
def assess_risk(body: AssessmentCreate, user: dict = Depends(get_current_user)):
    """
    Calculate risk score for a student and save the assessment.
    Also updates the student's current risk_score and risk_label.
    """
    score, label = calculate_risk(
        attendance=body.attendance_pct,
        cgpa=body.cgpa,
        backlogs=body.backlogs,
        economic_status=body.economic_status,
        participation=body.participation_score or 5.0,
    )

    # Save assessment record
    assessment_data = body.model_dump()
    assessment_data["risk_score"] = score
    assessment_data["risk_label"] = label
    saved = supabase.table("assessments").insert(assessment_data).execute()

    # Update the student's live risk fields
    supabase.table("students").update({
        "risk_score": score,
        "risk_label": label,
        "attendance_pct": body.attendance_pct,
        "cgpa": body.cgpa,
        "backlogs": body.backlogs,
        "economic_status": body.economic_status,
    }).eq("id", body.student_id).execute()

    return {
        "risk_score": score,
        "risk_label": label,
        "assessment_id": saved.data[0]["id"] if saved.data else None,
        "breakdown": {
            "attendance_contribution": round((1 - body.attendance_pct / 100) * 40, 2),
            "cgpa_contribution": round((1 - body.cgpa / 10) * 35, 2),
            "backlog_contribution": round(min(body.backlogs * 5.0, 15.0), 2),
            "economic_contribution": {"low": 10, "medium": 5, "high": 0}.get(body.economic_status, 5),
        }
    }


@router.get("/history/{student_id}")
def get_assessment_history(student_id: str, user: dict = Depends(get_current_user)):
    """Get all past assessments for a student (trend data for charts)."""
    res = (
        supabase.table("assessments")
        .select("*")
        .eq("student_id", student_id)
        .order("created_at", desc=False)
        .execute()
    )
    return res.data
