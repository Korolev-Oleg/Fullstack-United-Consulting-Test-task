from pydantic import BaseModel

class ResponseSchema(BaseModel):
    data: list = []
