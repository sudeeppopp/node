var  brain = require("./js/brain.js");

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3],
  activation: 'sigmoid',
  leakyReluAlpha: 0.01,
};

net = new brain.NeuralNetwork(config);

function frontRunner(net) { 
setTimeout( function(){ net.train([ { input: [0], output: [0] }, { input: [0.5], output: [0.5] }, { input: [1], output: [1] } ]); output = net.run([0.5]); console.log(output); }, 100); }

frontRunner(net);