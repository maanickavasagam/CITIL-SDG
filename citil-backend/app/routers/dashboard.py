from fastapi import APIRouter, Depends
from app.database import supabase
from app.auth_utils import get_current_user

router = APIRouter()


@router.get("/")
def get_dashboard(user: dict = Depends(get_current_user)):
    """
    Returns all summary stats needed by the dashboard page:
    - Total students
    - Risk distribution (low / medium / high counts)
    - Department breakdown
    - Recent high-risk students
    - SDG goal distribution
    """
    students_res = supabase.table("students").select("*").execute()
    students = students_res.data or []

    total = len(students)
    low    = sum(1 for s in students if s.get("risk_label") == "low")
    medium = sum(1 for s in students if s.get("risk_label") == "medium")
    high   = sum(1 for s in students if s.get("risk_label") == "high")

    # Department breakdown
    dept_map: dict = {}
    for s in students:
        dept = s.get("department", "Unknown")
        dept_map.setdefault(dept, {"total": 0, "high_risk": 0})
        dept_map[dept]["total"] += 1
        if s.get("risk_label") == "high":
            dept_map[dept]["high_risk"] += 1

    dept_breakdown = [
        {"department": k, **v} for k, v in dept_map.items()
    ]

    # SDG goal distribution
    sdg_map: dict = {}
    for s in students:
        goal = s.get("sdg_goal")
        if goal:
            sdg_map[goal] = sdg_map.get(goal, 0) + 1
    sdg_distribution = [{"sdg_goal": k, "count": v} for k, v in sorted(sdg_map.items())]

    # Recent high-risk students (last 10)
    high_risk_students = sorted(
        [s for s in students if s.get("risk_label") == "high"],
        key=lambda x: x.get("risk_score", 0),
        reverse=True,
    )[:10]

    # Average risk score
    scores = [s["risk_score"] for s in students if s.get("risk_score") is not None]
    avg_risk = round(sum(scores) / len(scores), 2) if scores else 0

    return {
        "total_students": total,
        "risk_distribution": {"low": low, "medium": medium, "high": high},
        "avg_risk_score": avg_risk,
        "dept_breakdown": dept_breakdown,
        "sdg_distribution": sdg_distribution,
        "high_risk_students": high_risk_students,
    }


@router.get("/alerts")
def get_alerts(user: dict = Depends(get_current_user)):
    """Students with risk_score >= 70 — the urgent list."""
    res = (
        supabase.table("students")
        .select("id, name, register_no, department, year, risk_score, risk_label")
        .gte("risk_score", 70)
        .order("risk_score", desc=True)
        .execute()
    )
    return {"alerts": res.data, "count": len(res.data or [])}
