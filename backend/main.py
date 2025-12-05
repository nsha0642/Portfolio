from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from backend.schemas import AskMeRequest, AskMeResponse
from backend.services.ai_agent import generate_answer, SAFE_REFUSAL

# Load environment variables from .env file with explicit path
from pathlib import Path
env_path = Path(__file__).parent.parent / "backend" / ".env"
load_dotenv(dotenv_path=str(env_path))

app = FastAPI(title="Nishanth Portfolio AI Backend", version="1.0.0")

# Adjust allowed origins as needed (for local dev we can allow all).
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
  return {"status": "ok"}


@app.post("/api/ask-me", response_model=AskMeResponse)
def ask_me(payload: AskMeRequest) -> AskMeResponse:
  question = (payload.question or "").strip()
  if not question:
    raise HTTPException(status_code=400, detail="Question must not be empty.")

  answer = generate_answer(question)
  if not answer:
    answer = SAFE_REFUSAL

  return AskMeResponse(answer=answer)


"""
Run the backend locally with:

  uvicorn backend.main:app --reload

By default this will start the FastAPI server on http://127.0.0.1:8000
and expose the /api/ask-me endpoint used by the React frontend.
"""



