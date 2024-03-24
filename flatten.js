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

const flatten = function(arr) {
  flatArray = [];
  stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      for (let j = 0; j < next.length; j++) {
        stack.push(next[j]);
      }
    } else {
      flatArray.unshift(next);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));