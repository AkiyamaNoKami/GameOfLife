from sqlalchemy import Column, Integer, String
from db import Base

class CreateTask:
    __tablename__ = "create_task"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True)
    description = Column(String)
    category = Column(String)