#!/usr/bin/env node

const { program } = require("@caporal/core");
const { parse, option } = require("caporal");
const os = require("os");
const scraperjs = require("scraperjs");
const externalip = require('external-ip')();
const lowerStr = 'abcdefghijklmnoopqrstuvwxyz';
const numeric = '1234567890';
const upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charRandom = (str, n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(str[Math.floor(Math.random() * str.length)]);
    }
    return res.join("");
}
const str = [...lowerStr, ...numeric, ...upperStr];

program
    // Task 1
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

    // Task 2
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

    // Task 3
    .command("palindrome", "Is Palindrome")
    .argument("<text>", "Text")
    .action(({ args }) => {
        console.log(`Is Palindrome? ${args.text.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("") == args.text.toLowerCase().replace(/[\W_]/g, "")}`)
    })

    // Task 4
    .command("obfuscate", "To Obfuscate")
    .argument("<text>", "Text")
    .action(({ args }) => {
        console.log(args.text.split("").map(value => `&#/${value.charAt(0)}`).join(""))
    })

    // Task 5
    .command("random", "To Random")
    .option("--leng <leng>", "Length", {
        validator: program.NUMBER,
        default:32,
    })
    .option("--letters <letters>", "Contain letter or not", {
        default: true,
        validator: program.BOOLEAN
    })
    .option("--numbers <numbers>", "Contain numbers or not", {
        default: true,
        validator: program.BOOLEAN,
    })
    .option("--lower <lower>", "Lowercase or not", {
        default: true,
        validator: program.BOOLEAN,
    })
    .option("--upper <upper>", "Uppercase or not", {
        default: true,
        validator: program.BOOLEAN,
    })
    .action(({ options }) => {
        if (!options.letters && !options.numbers) {
            console.log("");
        } else if (options.letters || !options.numbers) {
            if (!options.upper) {
                console.log(charRandom([...lowerStr, ...upperStr], options.leng).toLowerCase());    
            } else if (!options.lower) {
                console.log(charRandom([...lowerStr, ...upperStr], options.leng).toUpperCase());
            }
        } else if (!options.letters || options.numbers) {
            if (!options.upper) {
                console.log(charRandom([...numeric], options.leng).toLowerCase());    
            } else if (!options.lower) {
                console.log(charRandom([...numeric], options.leng).toUpperCase());
            }
        } else {
            if (!options.upper) {
                console.log(charRandom(str, options.leng).toLowerCase());    
            } else if (!options.lower) {
                console.log(charRandom(str, options.leng).toUpperCase());
            }
        }
    })
    
    // Task 6
    .command("ip")
    .action(({}) => {
        const interface = os.networkInterfaces();
        let addresses = [];
        for (let k in interface) {
            for (let l in interface[k]) {
                let addr = interface[k][l];
                if (addr.family === "IPv4" && !addr.internal) {
                    addresses.push(addr.address);
                }
            }
        }
        console.log(addresses.toString())
    })

    // Task 7
    .command("ip-external")
    .action(({}) => {
        externalip((err, ip) => {
            console.log(ip)
        })
    })

    // Task 8
    .command("headlines")
    .action( async ({}) => {
        scraperjs.StaticScraper.create("https://kompas.com")
            .scrape(function($) {
                return $(".article__link").map(function() {
                    return $(this).text();
                }).get();
            })
            .then(function(news) {
                console.log(news.map(value => "title: " + value).join("\n"))
            })
    })

    // Task 9

program.run();