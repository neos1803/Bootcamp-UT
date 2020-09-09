import asyncio
import json
from aiohttp import ClientSession

async def title(url):
    async with ClientSession() as session:
        async with session.get(url) as response:
            response = await response.read()
            data = json.loads(response)
            for d in data:
                print("title: ", d["title"])

loop = asyncio.get_event_loop()

loop.run_until_complete(title("https://jsonplaceholder.typicode.com/posts"))