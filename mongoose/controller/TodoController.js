const Todolist = require("../models/Todolist");

class Controller {
    static add(text) {
        Todolist.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, post) {
            let task = new Todolist({
                user_id: post.user_id + 1,
                description: text,
                createdAt: new Date()
            })
            task.save()
            .then(() => console.log("Created"))
            .catch(err => console.log(err))
        });
    }

    static update(number, text=null, status=null) {
        if(status) {
            Todolist.findOneAndUpdate(
                { user_id: number }, { status : status }, { 
                    returnOriginal: false 
                })
                .then(() => console.log("Task Done"))
                .catch(err => console.log(err))
        } else if(text) {
            Todolist.findOneAndUpdate(
                { user_id: number }, { description: text }, { 
                    returnOriginal: false 
                })
                .then(() => console.log("Updated"))
                .catch(err => console.log(err))
        } else {
            Todolist.findOneAndUpdate(
                { user_id: number }, { status: null }, { 
                    returnOriginal: false 
                })
                .then(() => console.log("Task Undone"))
                .catch(err => console.log(err))
        }
    }

    static delete(number) {
        Todolist.findOneAndDelete({ user_id: number }).then(() => console.log("Deleted")).catch(err => console.log(err))
    }

    static destroy() {

    }

    static read() {
        
    }
}

module.exports = Controller;