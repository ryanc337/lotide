const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


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




const helloGoodbye = { hello: "first", goodbye: "second"};
const goodbyeHello = { goodbye: "second", hello: "first"};
const onlyHello = { hello: "first" };

assertEqual(eqObjects(helloGoodbye, goodbyeHello), true);
assertEqual(eqObjects(helloGoodbye, onlyHello), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log(eqObjects(cd, cd2));