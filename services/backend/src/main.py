from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from crud import create_tasks
from database import models
from schemas import schemas

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return "Hello world!"

@app.post("/create-new-task", response_model=schemas.CreateTask)
def create_task(item: schemas.CreateTask, db: Session = Depends(get_db)):
    return crud.create_task(db=db, item=item)