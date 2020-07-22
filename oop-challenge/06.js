class Auth {
    constructor(data) {
        this.data = data;
        this.status = false;
        this.loggedIn = "No one";
        this.date = new Date().toLocaleString();
    }

    login(username, password) {
        for (let d in data) {
            if (username == data[d].username) {
                if (password == data[d].password) {
                    this.status = true;
                    this.loggedIn = data[d].username;
                    console.log(`Welcome ${data[d].username}`)
                    return true;
                }
            } else {
                console.log("Username/Password wrong")
            }
        }
    }

    validate (username, password) {
        for (let d in data) {
            if (username == data[d].username) {
                if (password == data[d].password) {
                    console.log("User is recorded");
                    return true;
                }
            } else {
                console.log("User isn't recorded");
            }
        }
    }

    logout() {
        this.status = false;
        console.log(`${this.loggedIn} is logged out`)
        return false;
    }

    check() {
        if (this.status == true) console.log("Akun sedang login");
        else console.log("Akun tidak login");
        return false;
    }

    id() {
        // for (let d in data) {
        //     if (data[d].username == this.lo) console.log(data[d].id);
        // }
        data.forEach((d) => {
            if(d.username == this.loggedIn) console.log(d.id);
        })
    }

    user() {
        data.forEach((d) => {
            if(d.username == this.loggedIn) console.log(d);
        })
    }

    isAdmin() {
        data.forEach((d) => {
            if (d.username == this.loggedIn) {
                if (d.isAdmin == true) console.log(true);
                else console.log(false);
            }
        })
    }

    lastLogin() {
        console.log(this.status === true ? new Date().toLocaleString() : this.date);
    }
}

const data = [
    {
        id: 1,
        username: "root",
        password: "123",
        isAdmin: false
    },
    {
        id: 2,
        username: "superoot",
        password: "111",
        isAdmin: true
    }
]

const auth = new Auth(data);
auth.login("superoot", "111");
auth.validate("root", "88");
auth.logout();
auth.check();
auth.id();
auth.user();
auth.isAdmin();
auth.lastLogin();