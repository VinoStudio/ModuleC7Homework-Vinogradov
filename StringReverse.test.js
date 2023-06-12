const reverseString = require('./StringReverse')

describe("tests for reverseString function", () => {
    it("should reverse string", () => expect(reverseString("Hello")).toBe("olleH"));
});