const convertToCelsius = function(tempInFarenheit) {
  tempInCelcius = tempInFarenheit*5/9 - 160/9;
  return parseFloat(tempInCelcius.toFixed(1));
};

const convertToFahrenheit = function(tempInCelcius) {
  tempInFarenheit = tempInCelcius*9/5 + 32;
  console.log(tempInFarenheit.toFixed(1));
  return parseFloat(tempInFarenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
