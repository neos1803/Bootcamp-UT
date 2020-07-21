let evenList = [], oddList = [], numberBy5 = [], primeNumbers = [], primeNumbersLess100 = [];
const groupingNumbers = (start, end) => {
    for (let index = start; index <= end; index++) {
        if (index % 2 === 0) evenList.push(index);
        if (index % 2 === 1) oddList.push(index);
        if (index % 5 === 0) numberBy5.push(index);
        if (index > 2) {
            
        }
        //console.log(`From ${start} to ${end}:
        //even numbers: ${evenList}
        //odd numbers: ${oddList}
        //numbers multiplies by 5: ${numberBy5}
        //prime numbers: ${primeNumbers}
        //prime numbers less than 100: ${primeNumbersLess100}`);
    }
}

groupingNumbers(0, 10);