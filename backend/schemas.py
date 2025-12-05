from pydantic import BaseModel


class AskMeRequest(BaseModel):
  question: str


class AskMeResponse(BaseModel):
  answer: str



