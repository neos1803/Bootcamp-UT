const isIsogram = require("../src/14");

test("Function test", () => {
    expect(isIsogram('gelas')).toBe(true);
    expect(isIsogram('makan')).toBe(false);
})