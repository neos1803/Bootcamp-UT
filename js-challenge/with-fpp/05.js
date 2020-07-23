const numbers = [...Array(1001).keys()]

const even = (array) => { return array.filter((number) => number % 2 == 0)}

const odd = (array) => { return array.filter((number) => number % 2 != 0)}

const multipleByFive = (array) => { return array.filter((number) => number % 5 == 0)}

const isPrime = (number) => {
    if (number == 2) return true;
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

console.log(even(numbers));
console.log(odd(numbers));
console.log(multipleByFive(numbers))
console.log(numbers.filter(value => isPrime(value)))
console.log(numbers.filter(value => isPrime(value) && value < 100))