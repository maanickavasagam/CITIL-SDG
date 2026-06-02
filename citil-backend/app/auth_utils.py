import os
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from dotenv import load_dotenv

load_dotenv()

SUPABASE_JWT_SECRET = os.environ["SUPABASE_JWT_SECRET"]  # from Supabase dashboard → Settings → API

bearer_scheme = HTTPBearer()


def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> dict:
    """
    Validates the JWT token issued by Supabase.
    Returns the decoded payload (user_id, email, role etc.).
    """
    token = credentials.credentials
    try:
        payload = jwt.decode(
            token,
            SUPABASE_JWT_SECRET,
            algorithms=["HS256"],
            options={"verify_aud": False},
        )
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )


def require_admin(user: dict = Depends(get_current_user)) -> dict:
    role = user.get("app_metadata", {}).get("role", "viewer")
    if role not in ("admin", "superadmin"):
        raise HTTPException(status_code=403, detail="Admin access required")
    return user
