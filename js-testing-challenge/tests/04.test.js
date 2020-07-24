const isLeapYear = require("../src/04");

test("Is Leap Year", () => {
    expect(isLeapYear(0)).toBe(false);
    expect(isLeapYear(100)).toBe(true);
    expect(isLeapYear(999)).toBe(false);
    expect(isLeapYear("sssss")).toBe(false);
})