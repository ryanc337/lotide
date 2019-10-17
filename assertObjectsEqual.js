const eqObjects = function(object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (const value of arrayOfKeys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  //loop through array1 and compare values to array 2
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (actual === true) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


let objectOne = {
  key1: "hello",
  key2: "goodbye",
  Key3: "no thanks"
};

let objectTwo = {
  key1: "hello",
  key2: "goodbye",
  Key3: "no thnks"
};

assertObjectsEqual(eqObjects(objectOne, objectTwo), true);

