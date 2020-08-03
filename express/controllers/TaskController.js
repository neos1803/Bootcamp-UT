const mongoose = require("mongoose")
const Task = require("../models/Task")

class Controller {
    static add(name, description) {
        let task = new Task();
        task.name = name;
        task.description = description;

        task.save()
            .then(() => console.log("Success"))
            .catch(err => console.log(err))
    }
}

module.exports = Controller;