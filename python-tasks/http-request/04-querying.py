import json
import requests
import datetime

response = requests.get("https://mul14.github.io/data/employees.json")
res = json.loads(response.text)
salary = [r for r in res if r["salary"] > 1500000]
live = [r for r in res if r["addresses"][0]["label"] == "home" and r["addresses"][0]["city"] == "DKI Jakarta"]
birthday = [r for r in res if datetime.datetime.strptime(r["birthday"], "%Y-%m-%d").month == 4]
dept = [r for r in res if r["department"]["name"] == "Research and development"]
absence = ["Absence of {}: {}".format(r["employee_id"], len(r["presence_list"])) for r in res]
print(json.dumps(salary, indent=3))
print(json.dumps(live, indent=3))
print(json.dumps(birthday, indent=3))
print(json.dumps(dept, indent=3))
print(json.dumps(absence, indent=3))