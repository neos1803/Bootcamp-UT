#!/usr/bin/env node

const { program } = require("@caporal/core");
const { parse } = require("caporal");
const JavaScriptObfuscator = require("javascript-obfuscator");

program
    .command("lowercase", "To Lowercase")
    .argument("<text>", "Insert text")
    .action(({ logger, args }) => {
        logger.info(`${args.text.toLowerCase()}`)
    })

    .command("uppercase", "To Uppercase")
    .argument("<text>", "Insert text")
    .action(({ logger, args }) => [
        logger.info(`${args.text.toUpperCase()}`)
    ])

    .command("capitalize", "To Capitalize")
    .argument("<text>", "Insert text")
    .action(({ logger, args }) => {
        logger.info(`${args.text.split(" ").map((value) => value.replace(value.charAt(0), value.charAt(0).toUpperCase())).join(" ")}`)
    })

    .command("add", "To Add")
    .argument("[env...]", "Other")
    .action(({ args }) => {
        let sum = 0;
        for(let i = 0; i < args.env.length; i++)
            sum += parseInt(args.env[i])
        console.log(sum)
    })

    .command("subtract", "To Subtract")
    .argument("[env...]", "Other")
    .action(({ args }) => {
        let sub = 0;
        for(let i = 0; i < args.env.length; i++)
            sub -= parseInt(args.env[i])
        console.log(sub)
    })

    .command("multiply", "To Multiply")
    .argument("[env...]", "Other")
    .action(({ args }) => {
        let multiply = args.env[0];
        for(let i = 0; i < args.env.length; i++)
            multiply *= parseInt(args.env[i])
        console.log(multiply)
    })
    
    .command("divide", "To Divide")
    .argument("[env...]", "Other")
    .action(({ args }) => {
        let divide = args.env[0];
        for(let i = 1; i < args.env.length; i++)
            divide /= parseInt(args.env[i])
        console.log(divide)
    })

    .command("palindrome", "Is Palindrome")
    .argument("<text>", "Text")
    .action(({ args }) => {
        console.log(`Is Palindrome? ${args.text.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("") == args.text.toLowerCase().replace(/[\W_]/g, "")}`)
    })

    .command("obfuscate", "To Obfuscate")
    .argument("<text>", "Text")
    .action(({ args }) => {
        let obfuscation = JavaScriptObfuscator.obfuscate(args.text);
        console.log(obfuscation.getObfuscatedCode())
    })

    .command("random", "To Random")
    .option("--length=<number>", "Length")
    

program.run();