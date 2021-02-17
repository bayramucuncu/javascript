const activationFunctions = require("../../../../src/algorithms/math/activation-functions/activationFunctions");

describe("activationFunctions", () => {
    it("should return step values", ()=>{
        expect(activationFunctions.step(0.2)).toBe(1);
        expect(activationFunctions.step(-0.2)).toBe(0);
        expect(activationFunctions.step(0.4, 2)).toBe(0);
    });

    it("should return sigmoid values", ()=>{
        expect(activationFunctions.sigmoid(0)).toBe(0.5);
        expect(activationFunctions.sigmoid(1)).toBe(0.7310585786300049);
    });

    it("should return relu values", ()=>{
        expect(activationFunctions.relu(0)).toBe(0);
        expect(activationFunctions.relu(1)).toBe(1);
        expect(activationFunctions.relu(-1)).toBe(0);
    });

    it("should return leaky relu values", ()=>{
        expect(activationFunctions.leakyRelu(0)).toBe(0);
        expect(activationFunctions.leakyRelu(1)).toBe(1);
        expect(activationFunctions.leakyRelu(-1,1)).toBe(-1);
    });
})