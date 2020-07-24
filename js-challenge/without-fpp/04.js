const leapYear = (start, end) => {
    let leapYearList = [];
    for(let i = start; i <= end; i++) {
        if(i % 4 == 0) leapYearList.push(i);
    }
    console.log(`Daftar tahun Kabisat dari ${start} sampai ${end}:
    ${leapYearList}`);
}

leapYear(2000, 2016);