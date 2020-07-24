const symmetrical = require("../src/09");

test("Function test", () => {
    expect(symmetrical('malam')).toBe(true) // true
    expect(symmetrical('taat')).toBe(true)  // true
    expect(symmetrical('tidur')).toBe(false) // false
    expect(symmetrical(1234)).toBe(false)    // false
    expect(symmetrical(108801)).toBe(true)  // true
    expect(symmetrical(8001008)).toBe(true) // true
})