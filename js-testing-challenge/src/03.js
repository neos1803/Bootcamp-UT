function mebiToKibi(mebi) {
    if (Math.sign(mebi) == -1) return false;
    return mebi * 1024;
}

module.exports = mebiToKibi;

// const mebiToKibi = number => number * 1024;

// module.exports = mebiToKibi;