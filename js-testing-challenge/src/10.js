function censor(text, word, add = "#") {
    word.forEach((value) => {
        if (text.match(new RegExp(value, "gi"))) {
            text = text.replace(new RegExp(value, "gi"), add.repeat(value.length));
        }
    });
    return text;
}

module.exports = censor;