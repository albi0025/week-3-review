

var Util = {};

Util.removeNumbers = function (array, number) {
  return array.filter(function(value) {
    return value !== number;
  });
};

Util.removeCaptitalizedStrings = function (array) {
  return array.filter(function(value) {
    return value.charAt(0).toUpperCase() !== value.charAt(0);
  });
};

Util.removeEvenNumbers = function (array) {
  return array.filter(function(value) {
    return value % 2 !== 0;
  });
};

// console.log(Util.removeCaptitalizedStrings(['Dog', 'cat', 'pig']));


export default Util;
