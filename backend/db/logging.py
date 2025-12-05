import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path(__file__).resolve().parent.parent / "ai_logs.db"


def get_connection() -> sqlite3.Connection:
  conn = sqlite3.connect(DB_PATH)
  conn.execute(
    """
    CREATE TABLE IF NOT EXISTS conversation_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
    """
  )
  return conn


def log_interaction(question: str, answer: str) -> None:
  try:
    conn = get_connection()
    with conn:
      conn.execute(
        "INSERT INTO conversation_logs (question, answer, created_at) VALUES (?, ?, ?)",
        (question, answer, datetime.utcnow().isoformat()),
      )
  except Exception:
    # Logging should never break the main flow
    pass



