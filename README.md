# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @makenziewakefield/lotide`

**Require it:**

`const _ = require('@makenziewakefield/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: function returns the first element of an array.
- `tail`: function returns every element of an array except for the first element.
- `middle`: function returns the middle element of an array, or the two middle elements if the array has an even number of elements
- `assertArraysEqual`: function takes in two arrays as parameters and returns true if the functions are the same, or returns false otherwise.
- `assertEqual`: function takes in two parameters and returns true if they are the same, or returns false otherwise.
- `assertObjectsEqual`: function takes in two objects as parameters and returns true if they are the same, or returns false otherwise.
- `countLetters`: function takes in a string as an parameters and returns a count of each of the letters in that string.
- `countOnly`: function takes an array and an objects as parameters. It returns an object containing counts of everything that the input object listed.
- `eqArrays`: function takes in two arrays as parameters and returns true if they are the same, or returns false otherwise.
- `eqObjects`: function takes in two objects as parameters and returns true if they are the same, or returns false otherwise.
- `findKey`: function takes an object and a callback as parameters. It looks through the objects and returns the first key for which the callback returns a truthy value. If not key is found, it returns undefined.
- `findKeyByValue`: function takes an object and a value as parameters. It looks throught the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `flatten`: function takes in an array containing elements including nested arrays of elements, and returns a flattened version of the array.
- `letterPositions`: function accepts a string as an parameters and returns all the indices in the string where each character is found as an object.
- `map`: function takes in two parameters: and array to map and a callback function. It returns a new array based on the results of the callback function.
- `takeUntil`: function takes in two parameters: an array to work with and a callback function. It returns elements taken from the beginning of the given array until the callback returns a truthy value.
- `without`: function takes two parameters and returns a subset of a given array in which all instances of the other parameter have been removed.