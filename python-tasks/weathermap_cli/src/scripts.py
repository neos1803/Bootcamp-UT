import requests
from tabulate import tabulate
from decouple import config
import click
import json
from datetime import datetime as dt
import calendar
import statistics

# def isAMPM(hour):
#     if 0<

def utc_converter(utc):
    conv = str(dt.utcfromtimestamp(utc))
    converted_date = dt.strptime(conv, "%Y-%m-%d %H:%M:%S")
    return converted_date

def datetime_converter(time):
    return dt.strptime(time, "%Y-%m-%d %H:%M:%S")

@click.group()
def cli():
    pass

# Weather command
@cli.command(name="weather")
@click.argument("city", required=False)
@click.option("--celcius", is_flag=True)
@click.option("--fahrenheit", is_flag=True)
@click.option("--temp", is_flag=True)
@click.option("--cities", multiple=True, nargs = 3)
def weather(city, fahrenheit, celcius, temp, cities):
    if cities:
        response = []
        for c in cities[0]:
            res = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={c}&appid={config('API_KEY')}")
            data = json.loads(res.text)
            response.append(data)
        return print(tabulate([f"{r['name']} | {r['main']['temp'] - 273.15}°C | {r['weather'][0]['main']}, {r['weather'][0]['description']}"] for r in response))
    else:
        response = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={config('API_KEY')}")
        res = json.loads(response.text)
        date = utc_converter(res["dt"])
        rise = utc_converter(res["sys"]["sunrise"])
        sunset = utc_converter(res["sys"]["sunset"])
        if temp:
            if fahrenheit:
                return print(tabulate([[f"{res['main']['temp'] - 459.67}°F | {res['weather'][0]['main']}, {res['weather'][0]['description']}"]], headers=[f" {res['name']} {date.strftime('%A')}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}"]))
            if celcius:
                return print(tabulate([[f"{res['main']['temp'] - 273.15}°C | {res['weather'][0]['main']}, {res['weather'][0]['description']}"]], headers=[f" {res['name']} {date.strftime('%A')}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}"]))    
            return print(tabulate([[f"{res['main']['temp']}°K | {res['weather'][0]['main']}, {res['weather'][0]['description']}"]], headers=[f" {res['name']} {date.strftime('%A')}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}"]))
        if celcius:
            return print(f"""
            datetime: {date.strftime("%A")}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}
            city: {res["name"]}
            temperature: {res["main"]["temp"] - 273.15}°C
            weather: {res["weather"][0]["main"]}, {res["weather"][0]["description"]}
            sunrise: {rise.strftime("%A")}, {calendar.month_name[rise.month]} {rise.month}, {rise.year} {rise.hour}:{rise.minute}:{rise.second}
            sunset: {sunset.strftime("%A")}, {calendar.month_name[sunset.month]} {sunset.month}, {sunset.year} {sunset.hour}:{sunset.minute}:{sunset.second}
            """)
        if fahrenheit:
            return print(f"""
            datetime: {date.strftime("%A")}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}
            city: {res["name"]}
            temperature: {res["main"]["temp"] - 459.67}°F
            weather: {res["weather"][0]["main"]}, {res["weather"][0]["description"]}
            sunrise: {rise.strftime("%A")}, {calendar.month_name[rise.month]} {rise.month}, {rise.year} {rise.hour}:{rise.minute}:{rise.second}
            sunset: {sunset.strftime("%A")}, {calendar.month_name[sunset.month]} {sunset.month}, {sunset.year} {sunset.hour}:{sunset.minute}:{sunset.second}
            """)
        else:
            return print(f"""
            datetime: {date.strftime("%A")}, {calendar.month_name[date.month]} {date.month}, {date.year} {date.hour}:{date.minute}:{date.second}
            city: {res["name"]}
            temperature: {res["main"]["temp"]}°K
            weather: {res["weather"][0]["main"]}, {res["weather"][0]["description"]}
            sunrise: {rise.strftime("%A")}, {calendar.month_name[rise.month]} {rise.month}, {rise.year} {rise.hour}:{rise.minute}:{rise.second}
            sunset: {sunset.strftime("%A")}, {calendar.month_name[sunset.month]} {sunset.month}, {sunset.year} {sunset.hour}:{sunset.minute}:{sunset.second}
            """)

@cli.command(name="forecast")
@click.argument("city")
@click.option("--days", is_flag=True)
def forecast(city, days):
    response = requests.get(f"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={config('API_KEY')}")
    res = json.loads(response.text)
    if days:
        name = f"{res['list'][0]['dt']}_{city}.json"
        print("processing...")
        with open(name, "w") as new_file:
            json.dump(res["list"], new_file, indent=3)
            print("done")
        return print(f"saved into {name}")
    else:
        return print(tabulate([f"{datetime_converter(l['dt_txt']).hour}:{datetime_converter(l['dt_txt']).minute} | {l['main']['temp'] - 273.15}°C | {l['weather'][0]['main']}, {l['weather'][0]['description']}"] for l in res["list"] if datetime_converter(l["dt_txt"]).day == datetime_converter(res["list"][0]["dt_txt"]).day))

@cli.command(name="dailyforecast")
@click.argument("city", nargs=-1)
@click.option("--cities", is_flag=True)
def dailyForecast(city, cities):
    if cities:
        # return print("masih belum")
        response = []
        with open("./city_id.json") as json_file:
            data = json.loads(json_file.read())
        for c in city:
            lon = [d['coord']['lon'] for d in data if d['name'].lower() == c.lower()][0]
            lat = [d['coord']['lat'] for d in data if d['name'].lower() == c.lower()][0]
            res = requests.get(f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,daily&appid={config('API_KEY')}")
            result = json.loads(res.text)
            response.append(result)
            # print(json.dumps(result, indent=3))
        name = f"{response[0]['current']['dt']}_dailyforecast.json"
        with open(name, "w") as new_file:
            print("processing...")
            json.dump(response, new_file, indent=3)
            print("done")
        return print(f"saved into {name}")
    else:
        daily_temp = []
        with open("./city_id.json") as json_file:
            data = json.loads(json_file.read())
        lon = [d['coord']['lon'] for d in data if d["name"].lower() == city.lower()][0]
        lat = [d['coord']['lat'] for d in data if d["name"].lower() == city.lower()][0]
        # print(lon)
        # print(json.dumps(data, indent=3))
        # for d in data:
        #     print(d["coord"])
        response = requests.get(f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,daily&appid={config('API_KEY')}")
        res = json.loads(response.text)
        morning = []
        evening = []
        night = []
        for i in range(3):
            morning = [r["temp"] for r in res["hourly"] if 0 <= utc_converter(r["dt"]).hour <= 11 and utc_converter(r["dt"]).day == utc_converter(res["current"]["dt"]).day + i]
            evening = [r["temp"] for r in res["hourly"] if 12 <= utc_converter(r["dt"]).hour <= 17 and utc_converter(r["dt"]).day == utc_converter(res["current"]["dt"]).day + i]
            night = [r["temp"] for r in res["hourly"] if 18 <= utc_converter(r["dt"]).hour <= 23 and utc_converter(r["dt"]).day == utc_converter(res["current"]["dt"]).day + i]
            if not night:
                night = [0,0,0]
            if not evening:
                evening = [0,0,0]
            if not morning:
                morning = [0,0,0]
            # if morning:
            #     daily_temp.append({f"{utc_converter(res['current']['dt']).day + i}" : {"Morning" : statistics.mean(morning)}})
            # if evening:
            #     daily_temp.append({f"{utc_converter(res['current']['dt']).day + i}" : {"Evening" : statistics.mean(evening)}})
            # if night:
            #     daily_temp.append({f"{utc_converter(res['current']['dt']).day + i}" : {"Night" : statistics.mean(night)}})
            daily_temp.append({ "date": f"{utc_converter(res['current']['dt']).day + i}", "result": [{
                "time" : "Morning",
                "temp" : statistics.mean(morning) 
                }, {
                "time" : "Evening",
                "temp" : statistics.mean(evening)
                }, {
                "time" : "Night",
                "temp" : statistics.mean(night)
                }]
            })
        print(json.dumps(daily_temp, indent=3))
            # if utc_converter(r["dt"]).day == utc_converter(res["current"]["dt"]).day:
            #     if 0 <= utc_converter(r["dt"]).hour <= 11:
        # morning = [r["temp"] for r in res["hourly"] if 0 <= utc_converter(r["dt"]).hour <= 11]
        # evening = [r["temp"] for r in res["hourly"] if 12 <= utc_converter(r["dt"]).hour <= 17]
        # night = [r["temp"] for r in res["hourly"] if 18 <= utc_converter(r["dt"]).hour <= 23]
        # print(morning, "\n", evening, "\n", night)
        # for i in range(len(daily_temp)):
        #     print(tabulate([f"{d[""]}"] for d in daily_temp))
        # print(json.dumps(res, indent=3))
        for i in range(len(daily_temp)):
            print(tabulate([[f"{ d['time'] } | { d['temp'] }°K"] for d in daily_temp[i]["result"]], headers=[ f"{city.title()}, {daily_temp[i]['date']} {calendar.month_name[utc_converter(res['current']['dt']).month]} {utc_converter(res['current']['dt']).year}" ] ))
            print("\n")
            # print(tabulate([ f"{d['time']} | {d['temp']}" ] for d in daily_temp[i]['result'], headers=[ f"{d['date']}"  for d in daily_temp ]))