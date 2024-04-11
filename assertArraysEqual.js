const eqArrays = require("./eqArrays")

const assertArraysEqual = function(a1, a2) {
  let value = eqArrays(a1, a2);
  if (value) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a1} !== ${a2}`);
  }
};


module.exports = assertArraysEqual;