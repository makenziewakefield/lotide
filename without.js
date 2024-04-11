const assertArraysEqual = require('./assertArraysEqual');


const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let j = 0; j < source.length; j++) {
    let boo = false;
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[j] === itemsToRemove[k]) {
        boo = true;
      }
    }
    if (!boo) {
      newArr.push(source[j]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;