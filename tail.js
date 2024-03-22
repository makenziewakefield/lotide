const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const emptyArr = [];
tail(emptyArr);
assertEqual(emptyArr, 2);

const smallArr = [];
tail(smallArr);
assertEqual(smallArr, 4);