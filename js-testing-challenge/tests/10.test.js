const censor = require("../src/10")

test("Function test", () => {
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toBe("#### ingin makan #### goreng.");
    expect(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toBe("Pada hari ****** saya ***** siang.")
})