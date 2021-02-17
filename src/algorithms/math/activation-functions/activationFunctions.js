const step = (x, treshold = 0) => x < treshold ? 0 : 1;

const sigmoid = (x) => 1 / (1 + Math.exp(-x));

const relu = (x) => Math.max(0, x);

const leakyRelu = (x, a = 0) => x < 0 ? a * x : x;

module.exports.step = step;
module.exports.sigmoid = sigmoid;
module.exports.relu = relu;
module.exports.leakyRelu = leakyRelu;