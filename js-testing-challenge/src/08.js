function arrayMirroring(numberList) {
    return numberList.concat([...numberList].reverse())
}

// const arrayMirroring = numberList => [...numberList, ...numberList.reverse()]

module.exports = arrayMirroring;