const factorial = require("../../../../src/algorithms/math/factorial/factorial");

describe("factorial()", () => {
    it("should return factorial of number", ()=>{
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
    });
})