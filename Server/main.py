from typing import Union
from fastapi import FastAPI

app = FastAPI()

clientid ="723817271422-g0beesp0f0769untnf2aulpchhtfk630.apps.googleusercontent.com";

@app.get("/")
def read_root():
    return {clientid}


