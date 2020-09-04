import datetime

data = [
    {
        "username": "admin",
        "password": "admin"
    },
    {
        "username": "root",
        "password": "root"
    }
]

class Auth:
    status = False
    logged = ""
    date = datetime.datetime.now()
    
    @staticmethod
    def login(user):
        for i in range(len(data)):
            if data[i]["username"] == user["username"] and data[i]["password"] == user["password"]:
                Auth.status = True
                Auth.logged = user["username"]
                print("Succesfully logged-in")
                break
            else:
                print("Log-in fail")

    @staticmethod
    def validate(user):
        if any(d["username"] == user["username"] and d["password"] == user["password"] for d in data):
            print("User exist")
    
    @staticmethod
    def user():
        print(Auth.logged)
    
    @staticmethod
    def check():
        if(Auth.status):
            print(True)
    
    @staticmethod
    def guest():
        if(Auth.status):
            print(False)
    
    @staticmethod
    def lastLogin():
        print(Auth.date)
    
    @staticmethod
    def logout():
        Auth.status = False
        print("Log out success")

Auth.login({ "username": "admin", "password": "admin" })
Auth.validate({ "username": "root", "password": "root" })
Auth.user()
Auth.check()
Auth.guest()
Auth.lastLogin()
Auth.logout()