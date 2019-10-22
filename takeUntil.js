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

module.exports = takeUntil;