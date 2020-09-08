import click
import statistics
import random
import string
import socket
import requests
import json
import os

@click.group()
def cli():
    pass

# Nomor 1
@cli.command(name="lowercase")
@click.argument("text")
def lowercase(text):
    print(text.lower())

@cli.command(name="uppercase")
@click.argument("text")
def uppercase(text):
    print(text.upper())

@cli.command(name="capitalize")
@click.argument("text")
def cap(text):
    print(text.title())

# Nomor 2
@cli.command(name="add")
@click.argument("number", nargs = -1, type=int)
def add(number):
    print(sum(number))

@cli.command(name="substract")
@click.argument("number", nargs = -1, type=int)
def substract(number):
    sub = 0
    for i in range(len(number)):
        sub -= number[i]
    print(sub)

@cli.command(name="multiply")
@click.argument("number", nargs = -1, type=int)
def multiply(number):
    x = number[0]
    for i in range(len(number)):
        x *= number[i]
    print(x)

@cli.command(name="divide")
@click.argument("number", nargs = -1, type=int)
def divide(number):
    x = number[0]
    for i in range(len(number)):
        x /= number[i]
    print(x)

# Nomor 3
@cli.command(name="mean")
@click.argument("number", nargs = -1, type=int)
def mean(number):
    print(statistics.mean(number))

@cli.command(name="median")
@click.argument("number", nargs = -1, type=int)
def median(number):
    print(statistics.median(number))

@cli.command(name="mode")
@click.argument("number", nargs = -1, type=int)
def mode(number):
    print(statistics.mode(number))

@cli.command(name="fmean")
@click.argument("number", nargs = -1, type=int)
def fmean(number):
    print(statistics.fmean(number))

# Nomor 4
@cli.command(name="palindrome")
@click.argument("text", type=str)
def palindrome(text):
    if text.lower() == text.lower()[::-1]:
        print("Is Palindrome? True")
    else:
        print("Is Palindrome? False")

# Nomor 5
@cli.command(name="obfuscate")
@click.argument("text", type=str)
def obfuscate(text):
    m = [f"&#{ord(n)};" for n in list(text.strip())]
    print("".join(m))

# Nomor 6
@cli.command(name="randoms")
@click.option("--length", type=int)
@click.option("--uppercase/--lowercase", type=bool)
@click.option("--letters", type=bool)
@click.option("--numbers", type=bool)
def randoms(length, numbers, letters, uppercase):
    if length:
        if numbers:
            return print("".join(str(random.choice(list(random.sample(range(0,10), 9)))) for i in range(length)))
        if letters:
            if uppercase:
                return print("".join((random.choice(list(string.ascii_uppercase))) for i in range(length)))
            if uppercase == False:
                return print("".join((random.choice(list(string.ascii_lowercase))) for i in range(length)))
            return print("".join((random.choice(string.ascii_letters) for i in range(length))))
    if numbers:
        if length:
            return print("".join(str(random.choice(list(random.sample(range(0,10), 9)))) for i in range(length)))
        return print("".join(str(random.choice(list(random.sample(range(0,10), 9)))) for i in range(32)))
    if letters:
        if length:
            if uppercase:
                return print("".join((random.choice(list(string.ascii_uppercase))) for i in range(length)))
            if uppercase == False:
                return print("".join((random.choice(list(string.ascii_lowercase))) for i in range(length)))
            return print("".join((random.choice(list(string.ascii_letters))) for i in range(length)))
        if uppercase:
            return print("".join((random.choice(list(string.ascii_uppercase))) for i in range(32)))
        if lowercase:
            return print("".join((random.choice(list(string.ascii_lowercase))) for i in range(32)))
        return print("".join((random.choice(string.ascii_letters)) for i in range(32)))
    if uppercase == False:
        if length:
            return print("".join((random.choice(list(string.ascii_lowercase))) for i in range(length)))
        return print("".join((random.choice(list(string.ascii_lowercase))) for i in range(32)))
    if uppercase:
        if length:
            return print("".join((random.choice(list(string.ascii_uppercase))) for i in range(length)))
        return print("".join((random.choice(list(string.ascii_uppercase))) for i in range(32)))

# Nomor 7
@cli.command(name="ip")
def ip():
    print(socket.gethostbyname(socket.gethostname()))

# Nomor 8
@cli.command(name="external-ip")
def externalIp():
    print(requests.get('http://ip.42.pl/raw').text)

# Nomor 9
@cli.command(name="sum")
def sums():
    l = []
    i = 0
    ex = False
    while ex == False:
        n = click.prompt(f"Nomor ke {i+1}", default="", type=int, show_default=False)
        if n:
            l.append(n)
            i += 1
        else:
            ex = True
            print(sum(l))

# Nomor 10
@cli.command("read")
def read():
    # save_path = 'C:/Users/AppandSec/Documents/Bootcamp-UT/python-tasks/cli_app/'
    # save = os.path.join(save_path, 'users.json')
    with open("./users.json") as json_file:
        # data = json_file.read()
        # print(data)
        n = json.loads(json_file.read())
        print(json.dumps(n, indent=3))

@cli.command("get")
@click.option("--name", type=str)
@click.option("--id", type=int)
def get(name, id):
    with open("./users.json") as json_file:
        data = json.loads(json_file.read())
    if name:
        print(json.dumps([ d for d in data if d["name"]["first"] == name ]))
    if id:
        print(json.dumps([ d for d in data if d["id"] == id ]))

@cli.command("delete")
@click.option("--name", type=str)
@click.option("--id", type=int)
def delete(name, id):
    with open("./users.json") as json_file:
        data = json.loads(json_file.read())
    if id:
        for i in range(len(data)):
            if data[i-1]["id"] == id:
                del data[i-1]
                print(json.dumps(data, indent=3))
                with open("./users.json", "w") as new_file:
                    json.dump(data, new_file, indent=3)
    if name:
        print(json.dumps([ d for d in data if d["id"] == id ]))

# @cli.command("create")
# def create():
#     l = []
#     d = {}
#     gender = click.prompt("Male or Female", type=str)
#     user = click.prompt("Format <Title> <first_name> <last_name>", type=str)
#     location = click.prompt("Format <street> <city> <state> <postcode> <email> <phone> <cell>", type=str)
#     d["gender"] = gender
#     d["name"]["title"] = user.split(" ")[0]
#     d["name"]["first"] = user.split(" ")[1]
#     d["name"]["last"] = user.split(" ")[2]
#     print(d)
    # print(user.split(" ")[0])
    # with open("./users.json") as json_file:
    #     data = json.loads(json_file.read())