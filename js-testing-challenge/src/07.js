function repeatLetter(str, number=1) {
    return str.split("").map(function(value) {
        return value.repeat(number)
    }).join("").replace(/\s{2,}/g, ' ')
}

module.exports = repeatLetter;