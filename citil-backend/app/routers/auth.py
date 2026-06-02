from fastapi import APIRouter, HTTPException, Depends
from app.models.schemas import LoginRequest, TokenResponse
from app.database import supabase
from app.auth_utils import get_current_user

router = APIRouter()


@router.post("/login", response_model=TokenResponse)
def login(body: LoginRequest):
    """
    Sign in with email + password via Supabase Auth.
    Returns a JWT access token for all subsequent requests.
    """
    try:
        res = supabase.auth.sign_in_with_password({
            "email": body.email,
            "password": body.password,
        })
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    user = res.user
    session = res.session

    if not user or not session:
        raise HTTPException(status_code=401, detail="Login failed")

    role = user.app_metadata.get("role", "viewer")

    return TokenResponse(
        access_token=session.access_token,
        user_id=str(user.id),
        email=user.email,
        role=role,
    )


@router.post("/logout")
def logout(user: dict = Depends(get_current_user)):
    supabase.auth.sign_out()
    return {"message": "Logged out"}


@router.get("/me")
def me(user: dict = Depends(get_current_user)):
    """Return the currently logged-in user's info."""
    return {
        "user_id": user.get("sub"),
        "email": user.get("email"),
        "role": user.get("app_metadata", {}).get("role", "viewer"),
    }
