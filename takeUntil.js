const takeUntil = function(array, callback) {
  let dataArray = [];
  for (const i of array) {
    if (callback(i) === false) {
      dataArray.push(i);
    } else {
      return dataArray;
    }
  }

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, num => num < 0);


console.log('---');



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, num => num === ',');


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
