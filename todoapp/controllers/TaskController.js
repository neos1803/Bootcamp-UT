const Task = require("../models/Task");
const multer = require("multer")
const path = require("path")
const fs = require("fs");

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
        let imagePath = path.join(__dirname, './../public/images/');
        if(req.file) {
            const data = await Task.findById({ _id: req.params.id }).exec();
            imagePath = imagePath + data.image;
            fs.unlinkSync(imagePath)
            update.name = req.body.name;
            update.description = req.body.description;
            update.image = req.file.filename;    
        } else {
            update.name = req.body.name;
            update.description = req.body.description;
        }

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
        let imagePath = path.join(__dirname, './../public/images/');
        const data = await Task.findById({ _id: req.params.id }).exec();
        imagePath = imagePath + data.image;
        await Task.findByIdAndDelete({ _id: req.params.id })
        fs.unlinkSync(imagePath)
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