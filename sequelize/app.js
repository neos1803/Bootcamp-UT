#!/usr/bin/env node

const { program } = require("@caporal/core");
const TodoController = require("./controllers/TodoController");

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

program.run()