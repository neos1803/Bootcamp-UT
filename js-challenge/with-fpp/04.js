const leapYear = (start, end) => {
    for(let i = start; i <= end; i++) {
        if(i % 4 == 0) console.log(`${i} merupakan tahun kabisat`);
    }
}

leapYear(2000, 2016);