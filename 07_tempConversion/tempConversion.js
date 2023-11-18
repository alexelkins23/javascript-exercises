const convertToCelsius = function(temp) {
  let cel = (temp - 32) * (5/9);
  return +cel.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let fah = temp * (9/5) + 32;
  return +fah.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
