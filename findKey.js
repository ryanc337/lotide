
const findKey = function (object, callBack) {
  // let result = [];
  for (const i in object) {
    if (callBack(object[i])) {
      return i;
    } 
  }
};

module.exports = findKey;



