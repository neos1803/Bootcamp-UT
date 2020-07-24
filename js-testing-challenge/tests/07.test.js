const repeatLetter =  require("../src/07");

test("Function test", () => {
    expect(repeatLetter("Hello World!", 2)).toBe("HHeelllloo WWoorrlldd!!")
})