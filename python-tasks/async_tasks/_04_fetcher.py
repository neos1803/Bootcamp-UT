import asyncio
import aiohttp

class Fetcher:
    loop = asyncio.get_event_loop()

    @staticmethod
    async def runGet(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                response = await response.read()
                return response
    
    @staticmethod
    def get(url):
        response = Fetcher.loop.run_until_complete(Fetcher.runGet(url))
        return response
    
    @staticmethod
    async def runPost(url, body):
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=bytes(f'{body}', encoding='utf-8')) as response:
                response = await response.read()
                return response
    
    @staticmethod
    def post(url, body):
        response = Fetcher.loop.run_until_complete(Fetcher.runPost(url, body))
        return response

    @staticmethod
    async def runDelete(url):
        async with aiohttp.ClientSession() as session:
            async with session.delete(url) as response:
                response = await response.read()
                return response
    
    @staticmethod
    def delete(url):
        response = Fetcher.loop.run_until_complete(Fetcher.runDelete(url))
        return response

res_get = Fetcher.get('http://httpbin.org/get')
jsonData = {
    "id": 30,
    "name": "Someone"
}
res_post = Fetcher.post('http://httpbin.org/post', jsonData)
res_delete = Fetcher.delete('http://httpbin.org/delete')
print(res_delete)