import json
import requests

response_user = requests.get("https://jsonplaceholder.typicode.com/users")
response_post = requests.get("https://jsonplaceholder.typicode.com/posts")
users = json.loads(response_user.text)
posts = json.loads(response_post.text)

def funcQuery(id):
    return list(filter(lambda a: a["id"] == id, users))[0]

for p in posts:
    p["user"] = funcQuery(p["userId"])

print(json.dumps(posts, indent=3))