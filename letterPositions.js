
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

module.exports = letterPositions;