from sqlalchemy.orm import Session
from . import models, schemas


def get_item(db: Session, item_id: int):
    return db.query(models.CreateTask).filter(models.CreateTask.id == item_id).first()

def get_items(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.CreateTask).offset(skip).limit(limit).all()

def create_task(db: Session, item: schemas.CreateTask):
    db_item = models.CreateTask(title = item.title, description = item.description, category = item.category)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item