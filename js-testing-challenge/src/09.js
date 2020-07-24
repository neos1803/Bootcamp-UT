function symmetrical(input) {
    if (typeof input == "string") {
        return input.split("").reverse().join("") === input
    } else if (typeof input == "number") {
        return input.toString().split("").reverse().join("") === input.toString()
    }
    return false;
}

module.exports = symmetrical;