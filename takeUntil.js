const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  let foundTrue = false;
  for (let item of array) {
    if (!foundTrue) {
      if (callback(item)) {
        foundTrue = true;
      } else {
        result.push(item);
      }
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const results3 = takeUntil(data1, x => x > 6);
assertArraysEqual(results3, [1, 2, 5]);


module.exports = takeUntil;
