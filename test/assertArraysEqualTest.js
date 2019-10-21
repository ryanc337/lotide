const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const middle = require('../middle');

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2]), [1]);


