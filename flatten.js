const flatten = function(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(arr[i]);
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;