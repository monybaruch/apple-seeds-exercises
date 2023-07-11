// The following exercise contains the following subjects:
// Array

// Instructions

// Write a function that takes an array of strings as a parameter and returns a new array containing the lengths
// of each string in the input array. The function should perform the following steps:
// Receive an array of strings as a parameter.
// Create an empty array to store the lengths of the strings.
// Iterate through each string in the input array.
// For each string, determine its length using the .length property.
// Add the length of each string to the new array.
// After iterating through all the strings, return the new array containing the lengths of the strings.
// Example:
// If you call this function with the following array as a parameter: ["boo", "doooo", "hoo", "ro"],
// it should return the following array: [3, 5, 3, 2].

const arr = ["boo", "doooo", "hoo", "ro"];
function arrLength(arr) {
  const arrLength = [];
  for (let i = 0; i < arr.length; i++) {
    arrLength.push(arr[i].length);
  }
  return arrLength;
}
console.log(arrLength(arr));
