const assert = require('chai').assert;
const tail = require("../tail")

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs")

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


describe("#tail", () => {

  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an array without the first element", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});