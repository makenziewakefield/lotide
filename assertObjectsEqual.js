const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let value = eqObjects(actual, expected);
  if (value) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject), true;


module.exports = assertObjectsEqual;