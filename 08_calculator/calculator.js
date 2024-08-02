const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  if(a < b) {
    return b - a;
  }else if (a >= b) {
    return a - b;
  }
};

const sum = function(array) {
  return array.reduce((total, index) => total + index, 0);
	
};

const multiply = function(array) {
  return array.reduce((total, index) => total * index);
};

const power = function(a, b) {
  //return a ** b;
  return Math.pow(a,b);
};

const factorial = function(a) {
  var result = a;

  if (a === 0 || a === 1) {
    return 1;
  }
  while (a > 1) {
    a--;
    result *= a;
  }
  return result;
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

