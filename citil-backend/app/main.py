from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, students, dashboard, risk, sdg

app = FastAPI(title="CITIL-SDG API", version="1.0.0")

# CORS — allow your Vercel frontend + localhost dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://citil-sdg.vercel.app",
        # add your custom domain here later
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router,      prefix="/auth",      tags=["auth"])
app.include_router(students.router,  prefix="/students",  tags=["students"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
app.include_router(risk.router,      prefix="/assess",    tags=["risk"])
app.include_router(sdg.router,       prefix="/sdg",       tags=["sdg"])

@app.get("/")
def root():
    return {"status": "CITIL-SDG backend is live 🚀"}
