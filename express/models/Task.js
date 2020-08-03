const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", taskSchema);