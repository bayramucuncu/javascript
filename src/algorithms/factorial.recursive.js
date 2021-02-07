
const factorialRecursive = (number) => {
    return number > 0 ? number * factorialRecursive(number - 1) : 1;
}

module.exports = factorialRecursive;