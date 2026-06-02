from fastapi import APIRouter, Depends
from app.database import supabase
from app.auth_utils import get_current_user

router = APIRouter()

# UN SDG goal names — all 17
SDG_NAMES = {
    1:  "No Poverty",
    2:  "Zero Hunger",
    3:  "Good Health and Well-being",
    4:  "Quality Education",
    5:  "Gender Equality",
    6:  "Clean Water and Sanitation",
    7:  "Affordable and Clean Energy",
    8:  "Decent Work and Economic Growth",
    9:  "Industry, Innovation and Infrastructure",
    10: "Reduced Inequalities",
    11: "Sustainable Cities and Communities",
    12: "Responsible Consumption and Production",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace, Justice and Strong Institutions",
    17: "Partnerships for the Goals",
}


@router.get("/scores")
def get_sdg_scores(user: dict = Depends(get_current_user)):
    """
    Returns per-SDG-goal stats across all students:
    how many students, avg risk, how many high-risk.
    Used to drive the SDG bar/radar chart on the frontend.
    """
    res = supabase.table("students").select(
        "sdg_goal, risk_score, risk_label"
    ).execute()
    students = res.data or []

    # Group by SDG goal
    sdg_map: dict = {}
    for s in students:
        goal = s.get("sdg_goal")
        if not goal:
            continue
        if goal not in sdg_map:
            sdg_map[goal] = {"scores": [], "high_risk": 0, "total": 0}
        sdg_map[goal]["total"] += 1
        if s.get("risk_score") is not None:
            sdg_map[goal]["scores"].append(s["risk_score"])
        if s.get("risk_label") == "high":
            sdg_map[goal]["high_risk"] += 1

    result = []
    for goal_num, data in sorted(sdg_map.items()):
        avg = round(sum(data["scores"]) / len(data["scores"]), 2) if data["scores"] else 0
        result.append({
            "sdg_goal": goal_num,
            "goal_name": SDG_NAMES.get(goal_num, f"SDG {goal_num}"),
            "student_count": data["total"],
            "avg_risk_score": avg,
            "high_risk_count": data["high_risk"],
        })

    return result


@router.get("/goals")
def get_all_goals():
    """Returns the list of all 17 SDG goals (for dropdowns etc.)."""
    return [{"id": k, "name": v} for k, v in SDG_NAMES.items()]
