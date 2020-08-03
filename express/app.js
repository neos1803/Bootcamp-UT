const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const router = express.Router();
// const TaskController = require("./controllers/TaskController")
const Task = require("./models/Task")

// Connecting DB
mongoose.connect("mongodb://127.0.0.1:27017/task_db", {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Check DB connection
db.once("open", function(){
    console.log("Connected to MongoDB");
});

// Check DB error connection
db.on("error", (err) => {
    console.log(err);
});

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    Task.find({}, function(err, tasks){
        if(err){
            console.log(err);
        } else {
            res.render("index", {
                tasks: tasks
            })
        }
    })
});

app.post("/task/add", function(req, res) {
    let task = new Task();
    task.name = req.body.name;
    task.description = req.body.description;

    task.save()
        .then(() => {
            console.log("Success")
            res.redirect("/");
        })
        .catch(err => console.log(err))
});

app.get("/task/edit/:id", function(req, res) {
    Task.findById(req.params.id, function(err, tasks) {
        res.render("edit", {
            task: tasks
        })
    })
})

app.post("/task/edit/:id", function(req, res) {
    let update = {};
    update.name = req.body.name;
    update.description = req.body.description;

    let par = {_id: req.params.id};

    Task.findOneAndUpdate(par, update, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Success")
            res.redirect("/")
        }
    })
})

app.get("/task/update/:id/:status", async function(req, res) {
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
})

app.get("/task/delete/:id", async function(req, res) {
    await Task.findByIdAndDelete({ _id: req.params.id})
    res.redirect("/")
})

app.listen(3000, function(){
    console.log(`Server started on port 3000`);
});