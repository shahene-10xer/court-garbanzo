from fastapi import FastAPI

app = FastAPI()


@app.get("/comparison")
def get_comparison():
    pass


@app.get("/summary")
def get_summary():
    pass


@app.get("/response")
def get_response():
    pass
