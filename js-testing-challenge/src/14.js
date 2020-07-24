function isIsogram(str) {
    return str.split("").every((x, y) => str.indexOf(x) == y);
}

module.exports = isIsogram;