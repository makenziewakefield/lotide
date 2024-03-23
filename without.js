const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (a1, a2) {
  let value = eqArrays(a1, a2);
  if (value) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a1} !=== ${a2}`);
  }
};


const without = function (source, itemsToRemove) {
  newArr = [];
  for (let j = 0; j < source.length; j++) {
    if (source[j] !== itemsToRemove[j]) {
      newArr.push(source[j]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);