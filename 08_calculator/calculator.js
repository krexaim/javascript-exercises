const add = function(...args) {
	let total = 0;
  for (arg of args) {
    total += arg;
  }
  return total;
};

const subtract = function(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total -= args[i]
  }
  return total;
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i]
  }
  return total;
};

const power = function(num, pow) {
  return num ** pow;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let total = 1;
	for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
