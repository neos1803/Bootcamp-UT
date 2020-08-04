const Task = require("../models/Task");
const multer = require("multer")
const path = require("path")
const fs = require("fs");
const { findByIdAndDelete } = require("../models/Task");

class Controller {
    static async add(req, res) {
        let task = new Task();
        task.name = req.body.name;
        task.description = req.body.description;
        task.image = req.file.filename;

        await task.save()
            .then(() => {
                console.log("Success")
                res.redirect("/");
            })
            .catch(err => console.log(err))
    }

    static async read(req, res) {
        await Task.find({}, function(err, tasks){
            if(err){
                console.log(err);
            } else {
                res.render("index", {
                    tasks: tasks
                })
            }
        })
    }

    static async find(req, res) {
        await Task.findById(req.params.id, function(err, tasks) {
            res.render("edit", {
                task: tasks
            })
        })
    }

    static async update(req, res) {
        let update = {};
        update.name = req.body.name;
        update.description = req.body.description;
        update.image = req.file.filename;

        let par = {_id: req.params.id};

        await Task.findOneAndUpdate(par, update, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log("Success")
                res.redirect("/")
            }
        }) 
    }

    static async destroy(req, res) {
        await Task.findByIdAndDelete({ _id: req.params.id })
        res.redirect('/')
    }

    static async doneUndone(req, res) {
        let update = {};
        const status = req.params.status;
        let par = {_id: req.params.id};
    
        if (status == "false") {
            update.status = true
        } else {
            update.status = false
        }

        await Task.findOneAndUpdate(par, update, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log("Success")
                res.redirect("/")
            }
        })
    }
}

module.exports = Controller;