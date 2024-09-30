from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import JSONResponse

app = FastAPI()

#Route for html temp
templates = Jinja2Templates(directory="templates")



@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


#Endpoints for get data
@app.get("/api/data")
def get_data():
    data = {"message": "Hello from Penguin"}
    return JSONResponse(content=data)

#Endpoints for post data
@app.post("/api/post-data")
async def post_data(request: Request):
    data = await request.json()
    response = {"received-data": data, "message": "Data received ok"}
    return JSONResponse(content=response)