const eqArrays = require("./eqArrays")

const assertArraysEqual = function(a1, a2) {
  let value = eqArrays(a1, a2);
  if (value) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a1} !== ${a2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 5, 6], [4, 5, 6]);
assertArraysEqual([], []);

module.exports = assertArraysEqual;