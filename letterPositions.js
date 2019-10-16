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



const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  //logic to update results here
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        counter += 1;
        results[letter].push(counter);
      } else {
        counter += 1;
        results[letter] = [counter];
      }
    } else {
      counter += 1;
    }
  }
  return results;

};

assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house")["g"], [2]);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
