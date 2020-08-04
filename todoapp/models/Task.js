const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task_db", {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});

const conn = mongoose.Collection;

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", taskSchema);