import asyncio
import json
import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            response = await response.read()
            data = json.loads(response)
            return data

loop = asyncio.get_event_loop()

movies = {}
keanu = {}
robert_tom = {}

# k = loop.run_until_complete(fetch(f"https://api.themoviedb.org/3/search/person?api_key=289ac4e1d00f87c84dede4a9c24b28be&language=en-US&query=keanu%20reeves&include_adult=false"))
# keanu["result"] = k["results"]

# with open("get_moviedb_001.json", "w") as new_file:
#     json.dump(keanu, new_file, indent=3)

# robert = loop.run_until_complete(fetch(f"https://api.themoviedb.org/3/search/person?api_key=289ac4e1d00f87c84dede4a9c24b28be&language=en-US&query=robert%20downey%20jr&include_adult=false"))
# tom = loop.run_until_complete(fetch(f"https://api.themoviedb.org/3/search/person?api_key=289ac4e1d00f87c84dede4a9c24b28be&language=en-US&query=tom%20holland&include_adult=false"))
# robert_tom["results"] = robert["results"], tom["results"]

# with open("get_moviedb_002.json", "w") as new_file:
#     json.dump(robert_tom, new_file, indent=3)
# for r,t in zip(robert["results"], tom["results"]):
#     for i,j in zip(r["known_for"], t["known_for"]):
#         if i["title"] == j["title"]:
#             print(json.dumps(i, indent=3))
# print(json.dumps(robert["results"][0]["known_for"][0]["title"], indent=3))

for i in range(1, 94):
    data = loop.run_until_complete(fetch(f"https://api.themoviedb.org/3/discover/movie?api_key=289ac4e1d00f87c84dede4a9c24b28be&language=en-US&include_adult=false&include_video=false&page={i}&primary_release_year=2016&vote_average.gte=7.5"))
    movies["result"] = data["results"]

with open("get_moviedb_003.json", "w") as new_file:
    json.dump(movies, new_file, indent=3)