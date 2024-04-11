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


module.exports = middle;