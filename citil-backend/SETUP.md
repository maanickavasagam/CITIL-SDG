# CITIL-SDG Backend — Phase 1 Setup Guide

## What's in here

```
citil-backend/
├── app/
│   ├── main.py          ← FastAPI app + CORS setup
│   ├── database.py      ← Supabase client
│   ├── auth_utils.py    ← JWT verification dependency
│   ├── risk_engine.py   ← Risk score formula (rule-based)
│   ├── models/
│   │   └── schemas.py   ← Pydantic request/response models
│   └── routers/
│       ├── auth.py      ← POST /auth/login, GET /auth/me
│       ├── students.py  ← Full CRUD + CSV import
│       ├── risk.py      ← POST /assess/risk
│       ├── dashboard.py ← GET /dashboard, GET /dashboard/alerts
│       └── sdg.py       ← GET /sdg/scores, GET /sdg/goals
├── supabase_schema.sql  ← Run this in Supabase SQL editor
├── requirements.txt
├── .env.example
└── Procfile             ← For Railway/Render deployment
```

---

## Step 1 — Create Supabase project

1. Go to https://supabase.com → New project
2. Pick a name (e.g. `citil-sdg`), set a strong DB password, choose region closest to you (Singapore for India)
3. Wait ~2 minutes for it to spin up
4. Go to **SQL Editor** → New Query → paste the entire contents of `supabase_schema.sql` → Run

---

## Step 2 — Get your Supabase credentials

In your Supabase project dashboard:

- **SUPABASE_URL**: Settings → API → Project URL
  (looks like `https://abcdefgh.supabase.co`)

- **SUPABASE_SERVICE_KEY**: Settings → API → `service_role` key
  (NOT the `anon` key — service role bypasses RLS, only use server-side)

- **SUPABASE_JWT_SECRET**: Settings → API → JWT Settings → JWT Secret

---

## Step 3 — Set up the backend locally

```bash
# Clone into your existing CITIL-SDG repo
cd your-CITIL-SDG-folder

# Copy the backend folder in
# (or just put the citil-backend files inside a /backend folder)

cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

pip install -r requirements.txt

# Create .env from template
cp .env.example .env
# Edit .env with your actual Supabase values

# Run locally
uvicorn app.main:app --reload
# → http://localhost:8000
# → http://localhost:8000/docs  (auto-generated Swagger UI — test all endpoints here)
```

---

## Step 4 — Deploy to Railway (free)

1. Go to https://railway.app → New Project → Deploy from GitHub repo
2. Point it at your CITIL-SDG repo, set the **Root Directory** to `backend`
3. In Railway → Variables, add:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_KEY=your-service-role-key
   SUPABASE_JWT_SECRET=your-jwt-secret
   PORT=8000
   ```
4. Railway auto-detects the `Procfile` and deploys
5. You get a URL like `https://citil-sdg-backend.up.railway.app`

---

## Step 5 — Update your frontend

In your Vercel project settings → Environment Variables:

```
VITE_API_URL=https://citil-sdg-backend.up.railway.app
```

Then in your React code, replace any hardcoded localhost with:
```js
const API = import.meta.env.VITE_API_URL;

// Login example
const res = await fetch(`${API}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
const { access_token, role } = await res.json();
localStorage.setItem('token', access_token);

// Authenticated request example
const students = await fetch(`${API}/students`, {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}).then(r => r.json());
```

---

## API Reference

| Method | Endpoint | What it does |
|--------|----------|-------------|
| POST | `/auth/login` | Login → returns JWT token |
| GET | `/auth/me` | Get current user info |
| GET | `/students` | List all students (filter by dept/year/risk) |
| POST | `/students` | Add a student |
| GET | `/students/:id` | Get one student |
| PUT | `/students/:id` | Update student |
| DELETE | `/students/:id` | Delete student |
| POST | `/students/import/csv` | Bulk import from CSV |
| POST | `/assess/risk` | Calculate + save risk score |
| GET | `/assess/history/:id` | Risk score history for a student |
| GET | `/dashboard` | All stats for dashboard page |
| GET | `/dashboard/alerts` | Students with risk >= 70 |
| GET | `/sdg/scores` | Per-SDG-goal stats |
| GET | `/sdg/goals` | All 17 SDG goal names |

Test everything at `http://localhost:8000/docs` (Swagger UI auto-generated).

---

## Risk Score Formula

```
risk_score = attendance_risk (0-40)
           + cgpa_risk       (0-35)
           + backlog_risk    (0-15)
           + economic_risk   (0-10)

attendance_risk = (1 - attendance_pct/100) × 40
cgpa_risk       = (1 - cgpa/10) × 35
backlog_risk    = min(backlogs × 5, 15)
economic_risk   = low→10, medium→5, high→0

Labels:
  0–34  → low
  35–59 → medium
  60–100 → high
```

In Phase 2 this gets replaced with a trained ML model once you collect real student data.
