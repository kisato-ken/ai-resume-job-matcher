from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import os

from .config import settings
from .api import router

# Create FastAPI application
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AI-powered resume analysis and job matching system",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(router, prefix=settings.API_V1_STR, tags=["resume-matcher"])

@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Welcome to AI Resume Job Matcher API",
        "version": "1.0.0",
        "docs": "/docs",
        "redoc": "/redoc",
        "health": f"{settings.API_V1_STR}/health"
    }

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Global exception handler"""
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal server error: {str(exc)}"}
    )

# Create upload directory if it doesn't exist
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
