const eqArrays = function(array1, array2) {
//loop through array1 and compare values to array 2
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;