// #!/usr/bin/env node

const mongoose = require("mongoose");
const { program } = require("@caporal/core");
const TodoController = require("./controller/TodoController");

mongoose.connect("mongodb://127.0.0.1:27017/todo_db", {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
    }, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected")
    }
});


program
    .command("list")
    .action(({}) => {
        TodoController.read()
    })

    .command("add")
    .argument("<text>")
    .action(({ args }) => {
        TodoController.add(args.text)
    })

    .command("update")
    .argument("<number>")
    .argument("<text>")
    .action(({ args }) => {
        TodoController.update(args.number, args.text)
    })

    .command("done")
    .argument("<number>")
    .action(({ args }) => {
        TodoController.update(args.number, null, "(DONE)")
    })

    .command("del")
    .argument("<number>")
    .action(({ args }) => {
        TodoController.delete(args.number)
    })

    .command("undone")
    .argument("<number>")
    .action(({ args }) => {
        TodoController.update(args.number, null, null)
    })

program.run()