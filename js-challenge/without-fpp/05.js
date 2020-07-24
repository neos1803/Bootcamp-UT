let evenList = [], oddList = [], numberBy5 = [], primeNumbers = [], primeNumbersLess100 = [];
const checkPrimeNumbers = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
}
const groupingNumbers = (start, end) => {
    if (end >= 2) {
        primeNumbers.push(2);
        primeNumbersLess100.push(2);
        for (let index = start; index <= end; index++) {
            if (index % 2 === 0) evenList.push(index);
            if (index % 2 === 1) oddList.push(index);
            if (index % 5 === 0) numberBy5.push(index);
            if (index > 2) {
                if (checkPrimeNumbers(index) != false) {
                    primeNumbers.push(index);
                    if (index < 100) primeNumbersLess100.push(index);
                }
            }
        }
    }
    console.log(`From ${start} to ${end}:
    even numbers: ${evenList}
    odd numbers: ${oddList}
    numbers multiplies by 5: ${numberBy5}
    prime numbers: ${primeNumbers}
    prime numbers less than 100: ${primeNumbersLess100}`);
}
groupingNumbers(0, 1000);