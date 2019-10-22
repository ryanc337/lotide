
const findKeyByValue = function(object, value) {
  let arrayOfKeys = Object.keys(object);
  for (let i = 0; i < arrayOfKeys.length; i++) {
    if (object[arrayOfKeys[i]] === value) {
      return arrayOfKeys[i];
    }
  }
};

module.exports = findKeyByValue;
