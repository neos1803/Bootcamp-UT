const mebiToKibi = require("../src/03");

test("Mebi to Kibi", () => {
    expect(mebiToKibi(1)).toBe(1024);
    expect(mebiToKibi("aaaa")).toBe(NaN);
    expect(mebiToKibi(-1)).toBe(false);
    expect(mebiToKibi(0)).toBe(0);
})