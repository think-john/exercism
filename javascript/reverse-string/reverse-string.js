'use strict';

var reverseString = function(input) {
  return input.toString().split('').reverse().join('');
}

module.exports = reverseString;