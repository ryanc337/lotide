# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryanc337/lotide`

**Require it:**

`const _ = require('@ryanc337/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Check the equality between two arrays
* `assertEqual(actual, exprected)`: check the expected result of a function
* `assertObjectsEqual(actual, expected`: check the equality between this and the eqObjects function
* `countLetters(string)`: count the number of letters in a given string
* `countOnly(allItems, itemsToCount)`: count the number of specified items
* `eqArrays(array1, array2)`: loops through each array to check index for equality
* `eqObjects(object1, object2)`: loops through each object to check key-value pairs for equality
* `findKey(callback)`: finds the speficed key in a specific object via callback function
* `findKeyByValue(object, value)`: same as findKey but takes a value and will return wanted key
* `flatten(array)`: takes an array of arrays and returns one new array with no arrays inside
* `head(array)`:slices and array at index 1 to return only the index of 0 within that array
* `letterPositions(sentence)`: takes a sentence and returns the index of each letter within the sentence
* `map(array, callback)` an alternative to array.protoype.map in Es6
* `middle(array)` returns the middle index element(s) of an array
* `tail(array)` slices array at 1 and returns the rest of the array
* `takeUntil(array, callback)`: retrieves data from an array until callback functions is false
* `without(source, itemsToRemove)`: removes certain items from a source;