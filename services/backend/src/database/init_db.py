from .config import engine, Base
from .models import CreateTask


def init_db():
    Base.metadata.create_all(bind)