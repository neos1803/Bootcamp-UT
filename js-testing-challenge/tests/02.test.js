const sum = require("../src/02")

test("Adds x + y is equal to", () => {
    expect(sum(1, 4)).toBe(5);
    expect(sum(2, -4)).toBe(-2);
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(4, 2)).toBe(6);
});