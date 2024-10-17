from random import randint

from fastapi import FastAPI,security
from fastapi.middleware.cors import CORSMiddleware

from schema import ResponseSchema

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/chart/a")
async def charts(count: int, limit: int, sort: bool = False) -> ResponseSchema:
    data = [randint(0, limit) for i in range(count)]
    return ResponseSchema(data=sorted(data) if sort else data)
