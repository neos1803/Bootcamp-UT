import requests,json
from bs4 import BeautifulSoup

url = 'https://indeks.kompas.com/headline'
res = requests.get(url)
soup = BeautifulSoup(res.content, 'html.parser')

data = soup.find_all('a', class_="article__link", href=True)

headlines = [ {"Title": d.text, "URL": d["href"] } for d in data ]

print(json.dumps(headlines, indent = 3))