from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from data import CONTENT

app = FastAPI(title="Powerlifting API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/content/{section}")
def get_section_content(section: str):
    if section not in CONTENT:
        raise HTTPException(status_code=404, detail=f"Section '{section}' not found")
    return CONTENT[section]


@app.get("/api/sections")
def get_sections():
    return list(CONTENT.keys())
