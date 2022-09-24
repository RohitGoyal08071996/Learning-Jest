const greeting = () => { return "Greetings!" }

describe("Greeting()", () => {
    it("say Greetings!", () => {
        expect(greeting()).toBe("Greetings!");
    });
});