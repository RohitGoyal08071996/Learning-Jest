const fizzBuzz = require("./index");

describe("FizzBuzz()", () => {
    it(" should print FizzBuzz.", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    }),
        it(" should print Fizz.", () => {
            expect(fizzBuzz(5)).toBe("Fizz");
        }),
        it(" should print Buzz.", () => {
            expect(fizzBuzz(3)).toBe("Buzz");
        }),
        it(" should print Number passed.", () => {
            expect(fizzBuzz(4)).toBe("4");
        })
})