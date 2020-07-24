const repeatString = require("../src/06")

test("Function test", () => {
    expect(repeatString("Makan! ", 3)).toBe("Makan! Makan! Makan! ");
    expect(repeatString("111 ", 3)).toBe("111 111 111 ");
})