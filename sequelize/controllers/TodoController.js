const models = require("../models")

class Controller {
    static add(description) {
        models.Todolist.create({
            description: description
        })
        .then(() => console.log("Sukses"))
        .catch(err => console.log(err))
    }

    static read() {
        models.Todolist.findAll({
            attributes: ["id", "description", "status"]
        })
            .then(data => {
                data.forEach(d => {
                    for (let i in d.dataValues) {
                        console.log(d.dataValues[i])
                    }
                })
            })
            .catch(err => console.log(err))
    }

    static update(id, description=null, status=null) {
        if (description) {
            models.Todolist.update({
                description:description
            }, {
                where: {
                    id: id
                }
            })
            .then(() => {
                console.log("Update Sukses")
            })
            .catch(err => console.log(err))
        } else if (status) {
            models.Todolist.update({
                status: status
            }, {
                where: {
                    id: id
                }
            })
            .then(() => {
                console.log("Task completed")
            })
            .catch(err => console.log(err))
        } else {
            models.Todolist.update({
                status: null
            }, {
                where: {
                    id: id
                }
            })
            .then(() => {
                console.log("Task uncompleted")
            })
            .catch(err => console.log(err))
        }
    }

    static delete(id) {
        models.Todolist.destroy({
            where: {
                id: id
            }
        })
        .then(() => console.log("Deleted"))
        .catch(err => console.log(err))
    }

}

module.exports = Controller;