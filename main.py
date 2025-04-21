from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from jinja2 import Environment, FileSystemLoader
import os

app = FastAPI()

# Mount static directories
app.mount("/static", StaticFiles(directory="static"), name="static")

# Jinja2 environment
templates = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=True
)

# Your link data

LINKS = [
    # Row 1
    {"href": "https://patreon.com/axeishguy", "img": "patreon.jpg", "label": "Patreon"},
    {"href": "https://cornoddity.com/Axeishguy", "img": "shop.jpg", "label": "shop"},
    {"href": "#", "img": "prints.jpg",      "label": "Available Prints (Coming Soon)"},
    # Row 2
    {"href": "https://instagram.com/axeishguy", "img": "ig.jpg",  "label": "Instagram"},
    {"href": "https://x.com/axeishguy",         "img": "x.jpg",   "label": "X (Twitter)"},
    {"href": "https://bsky.app/profile/axeishguy.bsky.social", "img": "bsky.jpg", "label": "Bluesky"},
    # Row 3
    {"href": "https://discord.gg/fP6cYFbKqj",    "img": "discord.jpg", "label": "Join my Discord"},
    # Row 4
    {"href": "#", "img": "game.jpg",       "label": " Adult Games (Coming Soon)"},
    {"href": "#", "img": "kickstarter.jpg","label": "Kickstarter (Coming Soon)"},
    # Row 5
    {"href": "https://venmo.com/u/axeishguy",       "img": "venmo.jpg",      "label": "Venmo"},
    {"href": "https://cash.app/$axeishguy",      "img": "cashapp.jpg",     "label": "Cashapp"},
    {"href": "https://www.amazon.com/hz/wishlist/ls/1JCO4HMWVDSW7?ref_=wl_share", "img": "amazon.jpg",   "label": "Amazon Wish List"},
]

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    template = templates.get_template("index.html")
    content = template.render(
        title="Axeishguy",
        profile_img="/static/assets/profile.jpg",
        bg_img="/static/assets/bg-pattern.png",
        links=LINKS,
    )
    return HTMLResponse(content)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
