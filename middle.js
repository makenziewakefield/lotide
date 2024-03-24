const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(a1, a2) {
  let value = eqArrays(a1, a2);
  if (value) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a1} !=== ${a2}`);
  }
};

const middle = function(arr) {
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if (length <= 2) {
    return [];
  } else {
    if (length % 2 === 0) {
      return [arr[mid - 1], arr[mid]];
    } else {
      return [arr[mid]];
    }
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);