//? ---------------------------------------------------- +++ HELPER FUNCTIONS +++ ------------------------------------------------------------------

// pass in an array checks to see if all elements are numbers or not including 0
function allNumbers(arr) {
  var res = arr.some(function (el) {
    return !el && el != 0;
  });
  return res;
}

// splits at "," creates array, returns new array with all values changed to numbers or NaN if not possible
function strToNums(str) {
  arr = str.split(",");
  arr = arr.map(function (num) {
    return +num;
  });
  return arr;
}

// export helpers
module.exports = {
  strToNums,
  allNumbers,
};
//! ---------------------------------------------------- +++ HELPER FUNCTIONS +++ ------------------------------------------------------------------
