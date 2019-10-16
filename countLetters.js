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


console.log(countLetters("lighthouse in the house"));
