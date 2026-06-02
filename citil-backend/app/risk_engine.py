"""
Risk Score Engine — Phase 1 (rule-based weighted formula)
----------------------------------------------------------
Calculates a 0–100 risk score and assigns a label: low / medium / high.

Weights:
  - Attendance   : 40%  (below 75% = danger zone)
  - CGPA         : 35%  (below 5.0 = danger zone on 10-pt scale)
  - Backlogs     : 15%  (each backlog adds pressure)
  - Economic     : 10%  (low income = higher risk)

In Phase 2 you can swap this with a trained ML model.
"""

def calculate_risk(
    attendance: float,       # 0–100
    cgpa: float,             # 0–10
    backlogs: int,           # number of backlogs
    economic_status: str,    # "low" | "medium" | "high"
    participation: float = 5.0,  # 0–10 (optional, not used in score yet)
) -> tuple[float, str]:
    """
    Returns (risk_score: float 0–100, risk_label: str)
    Higher score = higher risk.
    """

    # ── Attendance risk (0–40) ──────────────────────────────────────────────
    # 100% attendance → 0 risk, 0% attendance → 40 risk
    att_clamped = max(0.0, min(100.0, attendance))
    att_risk = (1 - att_clamped / 100) * 40

    # ── CGPA risk (0–35) ────────────────────────────────────────────────────
    # 10.0 CGPA → 0 risk, 0.0 CGPA → 35 risk
    cgpa_clamped = max(0.0, min(10.0, cgpa))
    cgpa_risk = (1 - cgpa_clamped / 10) * 35

    # ── Backlog risk (0–15) ─────────────────────────────────────────────────
    # 0 backlogs → 0, each backlog adds 5 points, capped at 15
    backlog_risk = min(backlogs * 5.0, 15.0)

    # ── Economic risk (0–10) ────────────────────────────────────────────────
    eco_map = {"low": 10.0, "medium": 5.0, "high": 0.0}
    eco_risk = eco_map.get(economic_status.lower(), 5.0)

    # ── Total ────────────────────────────────────────────────────────────────
    total = att_risk + cgpa_risk + backlog_risk + eco_risk
    total = round(max(0.0, min(100.0, total)), 2)

    # ── Label ────────────────────────────────────────────────────────────────
    if total >= 60:
        label = "high"
    elif total >= 35:
        label = "medium"
    else:
        label = "low"

    return total, label
