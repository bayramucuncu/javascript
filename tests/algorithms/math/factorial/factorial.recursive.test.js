const factorialRecursive = require("../../../../src/algorithms/math/factorial/factorial");

describe("factorialRecursive()", () => {
    it("should return factorial of a number", ()=>{
        expect(factorialRecursive(0)).toBe(1);
        expect(factorialRecursive(1)).toBe(1);
        expect(factorialRecursive(2)).toBe(2);
        expect(factorialRecursive(3)).toBe(6);
        expect(factorialRecursive(4)).toBe(24);
    });
})