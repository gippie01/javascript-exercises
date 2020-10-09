// Fahrenheit to Celsius
// Accept fahrenheit temperature
const ftoc = function (f) {
  // Round and return after converting with formula
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

// Celsius to Fahrenheit
// Accept celsius temperature
const ctof = function () {
  // Round and return after converting with formula
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};
