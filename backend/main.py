import uvicorn
from fastapi import FastAPI
from sqlalchemy import true

app = FastAPI()

@app.get("/")
def hello():
    return {"msg","第一次的orbis"}

if __name__ == '__main__':
    uvicorn.run(app="main:app",host="127.0.0.1",port=2580,reload=True)