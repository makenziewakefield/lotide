const assert = require('chai').assert;
const tail = require("../tail")


describe("#tail", () => {

  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an array without the first element", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});