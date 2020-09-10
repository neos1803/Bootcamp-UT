import requests
from tabulate import tabulate
from decouple import config
import click
import json
from datetime import datetime as dt
import calendar

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
        # for l in res["list"]: