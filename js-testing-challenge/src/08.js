function arrayMirroring(numberList) {
    return numberList.concat([...numberList].reverse())
}

module.exports = arrayMirroring;