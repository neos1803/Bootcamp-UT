const { program } = require("@caporal/core");

program.version("1.00").description("Aplikasi testing");

program
    .argument("<name>", "isi nama anda")
    .option("--greeting <greeting>", "Kalimat salam", {
        default: "Hai",
    })
    .action(({logger, args, options }) => {
        logger.info(options);
        if (options.greeting) {
            logger.info(`${options.greeting} ${args.name}`);
        }
        logger.info(`Halo ${args.name}`);
});

program.run();