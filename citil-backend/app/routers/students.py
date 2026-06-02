import csv
import io
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Depends, Query, UploadFile, File
from app.models.schemas import StudentCreate, StudentUpdate, StudentOut
from app.database import supabase
from app.auth_utils import get_current_user
from app.risk_engine import calculate_risk

router = APIRouter()


@router.get("/", response_model=List[StudentOut])
def list_students(
    department: Optional[str] = Query(None),
    year: Optional[int] = Query(None),
    risk_label: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    limit: int = Query(100, le=500),
    offset: int = Query(0),
    user: dict = Depends(get_current_user),
):
    """List students with optional filters."""
    query = supabase.table("students").select("*")

    if department:
        query = query.eq("department", department)
    if year:
        query = query.eq("year", year)
    if risk_label:
        query = query.eq("risk_label", risk_label)
    if search:
        query = query.ilike("name", f"%{search}%")

    res = query.range(offset, offset + limit - 1).execute()
    return res.data


@router.get("/{student_id}", response_model=StudentOut)
def get_student(student_id: str, user: dict = Depends(get_current_user)):
    res = supabase.table("students").select("*").eq("id", student_id).single().execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Student not found")
    return res.data


@router.post("/", response_model=StudentOut, status_code=201)
def create_student(body: StudentCreate, user: dict = Depends(get_current_user)):
    """Add a new student and auto-calculate their risk score."""
    data = body.model_dump()

    # Calculate risk score if we have enough data
    if data.get("attendance_pct") is not None and data.get("cgpa") is not None:
        score, label = calculate_risk(
            attendance=data["attendance_pct"],
            cgpa=data["cgpa"],
            backlogs=data.get("backlogs", 0),
            economic_status=data.get("economic_status", "medium"),
        )
        data["risk_score"] = score
        data["risk_label"] = label

    res = supabase.table("students").insert(data).execute()
    return res.data[0]


@router.put("/{student_id}", response_model=StudentOut)
def update_student(student_id: str, body: StudentUpdate, user: dict = Depends(get_current_user)):
    updates = {k: v for k, v in body.model_dump().items() if v is not None}

    # Recalculate risk if relevant fields changed
    if any(k in updates for k in ("attendance_pct", "cgpa", "backlogs", "economic_status")):
        existing = supabase.table("students").select("*").eq("id", student_id).single().execute().data
        merged = {**existing, **updates}
        score, label = calculate_risk(
            attendance=merged.get("attendance_pct", 75),
            cgpa=merged.get("cgpa", 5.0),
            backlogs=merged.get("backlogs", 0),
            economic_status=merged.get("economic_status", "medium"),
        )
        updates["risk_score"] = score
        updates["risk_label"] = label

    res = supabase.table("students").update(updates).eq("id", student_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Student not found")
    return res.data[0]


@router.delete("/{student_id}", status_code=204)
def delete_student(student_id: str, user: dict = Depends(get_current_user)):
    supabase.table("students").delete().eq("id", student_id).execute()


@router.post("/import/csv", status_code=201)
async def import_csv(
    file: UploadFile = File(...),
    user: dict = Depends(get_current_user),
):
    """
    Bulk import students from a CSV file.
    Expected columns: name, register_no, department, year, attendance_pct, cgpa, backlogs, economic_status, sdg_goal
    """
    content = await file.read()
    text = content.decode("utf-8")
    reader = csv.DictReader(io.StringIO(text))

    rows = []
    for row in reader:
        try:
            attendance = float(row.get("attendance_pct", 75))
            cgpa = float(row.get("cgpa", 5.0))
            backlogs = int(row.get("backlogs", 0))
            economic_status = row.get("economic_status", "medium")

            score, label = calculate_risk(attendance, cgpa, backlogs, economic_status)

            rows.append({
                "name": row["name"],
                "register_no": row.get("register_no", ""),
                "department": row.get("department", ""),
                "year": int(row.get("year", 1)),
                "email": row.get("email") or None,
                "attendance_pct": attendance,
                "cgpa": cgpa,
                "backlogs": backlogs,
                "economic_status": economic_status,
                "sdg_goal": int(row["sdg_goal"]) if row.get("sdg_goal") else None,
                "risk_score": score,
                "risk_label": label,
            })
        except Exception as e:
            continue  # skip malformed rows

    if not rows:
        raise HTTPException(status_code=400, detail="No valid rows found in CSV")

    # Supabase upsert in batches of 100
    batch_size = 100
    inserted = 0
    for i in range(0, len(rows), batch_size):
        batch = rows[i : i + batch_size]
        supabase.table("students").upsert(batch, on_conflict="register_no").execute()
        inserted += len(batch)

    return {"message": f"Imported {inserted} students successfully"}
