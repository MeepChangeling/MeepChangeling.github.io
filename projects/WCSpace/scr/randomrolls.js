// Function to roll a specified die multiple times
function dieroll(times, dieFunction) {
    let total = 0;
    for (let i = 0; i < times; i++) {
        total += dieFunction();
    }
    return total;
}

// Function to handle complex dice rolls
function complexRoll(diceArray) {
    let total = 0;
    diceArray.forEach(dice => {
        total += dieroll(dice.times, dice.dieFunction);
    });
    return total;
}//Expects an array of objects with this template:complexRoll([{ times: 3, dieFunction: d6 }, { times: 1, dieFunction: d4 }]);

// Dice
function d2(){
  die = getRandomInt(1, 2);
  return die
};
function d3(){
  die = getRandomInt(1, 3);
  return die
};
function d4(){
  die = getRandomInt(1, 4);
  return die
};
function d5(){
  die = getRandomInt(1, 5);
  return die
};
function d6(){
  die = getRandomInt(1, 6);
  return die
};
function d8(){
  die = getRandomInt(1, 8);
  return die
};
function d10(){
  die = getRandomInt(1, 10);
  return die
};
function d12(){
  die = getRandomInt(1, 12);
  return die
};
function d20(){
  die = getRandomInt(1, 20);
  return die
};
function d50(){
  die = getRandomInt(1, 50);
  return die
};
function d100(){
  die = getRandomInt(1, 100);
  return die
};

// Random Range / Item selection
function getRandomItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Please provide a non-empty array.");
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
};
function range(die, lowerBound, upperBound) {
    return die >= lowerBound && die <= upperBound;
};
function randomLogarithmic(min, max) {
    const logMin = Math.log(min);
    const logMax = Math.log(max);
    const logRandom = logMin + (logMax - logMin) * Math.random();
    return Math.exp(logRandom);
};
//Get a random normal distribution
function randomNormal(mean, stddev) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return num * stddev + mean;
};
