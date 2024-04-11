const assertEqual = require('./assertEqual');


const findKeyByValue = function (object, value) {
  for (const key in object) {      // loops over the object, key represents each property inside the object.
    if (object[key] === value) {   // checks if object key (bestTVShowsByGenre[comedy]) is equal to the value that was passed into the function.
      return key;                  // if the last line is true the function returns the key of the value that was passed.
    }
  }
  return undefined                 // if there was no match found the function returns undefined.
}




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;