const assert = require('chai').assert;
const middle = require("../middle");


describe("#middle", () => {

  it("returns an empty array when given an array of two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an empty array when given and array of one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle element of an array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns the two middle elements of an array if the array has an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });


});