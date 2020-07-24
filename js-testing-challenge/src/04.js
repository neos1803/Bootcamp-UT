function isLeapYear(year) {
    if (Math.sign(year) == -1 || year == 0) return false;
    if (typeof year == "string") return false
    if (year % 4 == 0) return true;
    return false;
}

module.exports = isLeapYear;