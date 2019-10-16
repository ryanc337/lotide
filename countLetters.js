const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  letterCount = {};

  for (const letter of string) {
  if (letter !== " ") {
    if (letterCount[letter]) {
      letterCount[letter] += 1; 
    } else {
      letterCount[letter] = 1;
    }
  }
}
  return letterCount;
}


const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
