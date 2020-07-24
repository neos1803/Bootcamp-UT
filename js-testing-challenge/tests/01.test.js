const charLength = require("../src/01");

test("Return character length:", () => {
    expect(charLength("Ohayou")).toBe(6);
    expect(charLength("Ohayou Sekai")).toBe(12);
    expect(charLength(".....  ")).toBe(7);
});