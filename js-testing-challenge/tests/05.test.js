const isPrime = require("../src/05");

test("Is Prime Number", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(999)).toBe(false);
    expect(isPrime("sssss")).toBe(undefined);
})