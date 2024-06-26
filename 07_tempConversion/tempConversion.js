const convertToCelsius = function(temp) {

  let celsius = (temp - 32) * (5/9);

  if (celsius !== 0) {
    return parseFloat(celsius.toFixed(1));
  } else {
    return celsius;
  }
};

const convertToFahrenheit = function(temp) {

  let fahrenheit = (temp) * (9/5) + 32;

  if (fahrenheit !== 0) {
    return parseFloat(fahrenheit.toFixed(1));
  } else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
