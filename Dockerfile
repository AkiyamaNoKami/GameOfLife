FROM node:20-alpine as build

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend ./

RUN npm run build

FROM python:3.12-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN apk update && \
    apk add --no-cache python3-dev

RUN pip install --upgrade pip
RUN pip install poetry
COPY pyproject.toml .
RUN poetry config virtualenvs.create false
RUN poetry install --no-root --no-interaction --no-ansi

COPY --from=build /app/frontend/dist /app/static

EXPOSE 8000

COPY . .

CMD ['uvicorn', 'main:app', '--host', '0.0.0.0', '--port', '8000']