const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);






