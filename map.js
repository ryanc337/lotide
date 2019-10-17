const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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


const results1 = map(words, word => word[0]);
const results2 = map(words, (word) => word + "hello")
const results3 = map(words, word => word[1]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'groundhello',
'controlhello',
'tohello',
'majorhello',
'tomhello' ]);
assertArraysEqual(results3, [ 'r', 'o', 'o', 'a', 'o' ]);


