from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


# ─── Auth ────────────────────────────────────────────────────────────────────

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: str
    email: str
    role: str


# ─── Students ────────────────────────────────────────────────────────────────

class StudentCreate(BaseModel):
    name: str
    register_no: str
    department: str
    year: int                          # 1, 2, 3, 4
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    attendance_pct: Optional[float] = None   # 0–100
    cgpa: Optional[float] = None             # 0–10
    backlogs: Optional[int] = 0
    economic_status: Optional[str] = None    # "low" | "medium" | "high"
    sdg_goal: Optional[int] = None           # 1–17

class StudentUpdate(BaseModel):
    name: Optional[str] = None
    department: Optional[str] = None
    year: Optional[int] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    attendance_pct: Optional[float] = None
    cgpa: Optional[float] = None
    backlogs: Optional[int] = None
    economic_status: Optional[str] = None
    sdg_goal: Optional[int] = None

class StudentOut(StudentCreate):
    id: str
    risk_score: Optional[float] = None
    risk_label: Optional[str] = None   # "low" | "medium" | "high"
    created_at: Optional[datetime] = None


# ─── Assessment ──────────────────────────────────────────────────────────────

class AssessmentCreate(BaseModel):
    student_id: str
    attendance_pct: float
    cgpa: float
    backlogs: int
    economic_status: str   # "low" | "medium" | "high"
    participation_score: Optional[float] = None   # 0–10

class AssessmentOut(AssessmentCreate):
    id: str
    risk_score: float
    risk_label: str
    created_at: datetime


# ─── SDG ─────────────────────────────────────────────────────────────────────

class SDGScoreOut(BaseModel):
    sdg_goal: int
    goal_name: str
    student_count: int
    avg_risk_score: float
    high_risk_count: int
