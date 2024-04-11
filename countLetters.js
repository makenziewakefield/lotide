const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const results = {};
  for (const char of str) {
    if (char !== ' ') {
      if (results[char]) {
        results[char]++;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

const results1 = countLetters('lighthouse in the house');

assertEqual(results1['l'], 1);
assertEqual(results1['t'], 2);
assertEqual(results1['e'], 3);
assertEqual(results1['h'], 4);

module.exports = countLetters;