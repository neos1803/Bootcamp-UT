const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
    user_id: {
        type: Number
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: false,
        default: null
    },
    createdAt: {
        type: Date
    }
})

module.exports = mongoose.model("Todolist", todolistSchema);