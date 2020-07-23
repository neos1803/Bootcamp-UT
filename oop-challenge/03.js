const fs = require("fs");

class Log {
    constructor() {
        this.file = "app.log";
    }

    write(text, level = "INFO") {
        text = `${[new Date().toISOString()]} ${level}: ${text}`;
        fs.appendFileSync(this.file, text, {encoding: "utf-8"});
    }

    info(text) {
        this.write(text);
    }

    error(text) {
        this.write(text, "ERROR");
    }

    debug(text) {
        this.write(text, "DEBUG");
    }

    notice(text) {
        this.write(text, "NOTICE");
    }
    
    alert(text) {
        this.write(text, "ALERT");
    }

    critical(text) {
        this.write(text, "CRITICAL");
    }

    emergency(text) {
        this.write(text, "WARNING");
    }
}

const log = new Log();
log.info("This is an information about something.");