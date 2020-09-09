import asyncio
import json
from aiohttp import ClientSession

async def title(url):
    async with ClientSession() as session:
        async with session.get(url) as response:
            response = await response.read()
            data = json.loads(response)
            products = [d for d in data if d["category"] == "fruits"]
            return products

loop = asyncio.get_event_loop()

products = loop.run_until_complete(title("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"))
print(json.dumps(products, indent=3))