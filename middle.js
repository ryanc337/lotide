const eqArrays = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😃😃😃😃 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤢🤢🤢🤢 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor((array.length - 1) / 2)], array[Math.ceil((array.length - 1) / 2)]];
  } else {
    return [array[(array.length - 1) / 2]]
  }
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2]), [1]);

