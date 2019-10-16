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

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
    return source;
  }
};


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
