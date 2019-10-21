const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor((array.length - 1) / 2)], array[Math.ceil((array.length - 1) / 2)]];
  } else {
    return [array[(array.length - 1) / 2]]
  }
}

module.exports = middle;


