import asyncio
import json
from aiohttp import ClientSession

async def title(url):
    async with ClientSession() as session:
        async with session.get(url) as response:
            response = await response.read()
            data = json.loads(response)
            return data

loop = asyncio.get_event_loop()

posts = loop.run_until_complete(title("https://jsonplaceholder.typicode.com/posts"))
users = loop.run_until_complete(title("https://jsonplaceholder.typicode.com/users"))

for post in posts:
    post["user"] = [user for user in users if user["id"] == post["userId"]]

print(json.dumps(posts, indent=3))