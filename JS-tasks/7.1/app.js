// The following exercise contains the following subjects:
// ●	arrays
// ●	indexOf

// Instructions

// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.

// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

const arr = [1, 2, 1, 2, 3, 3, 4, 4, 6, 5, 6];

function noRepeat(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(noRepeat(arr));

//with for of
const noRepeat2 = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (newArr.indexOf(num) === -1) newArr.push(num);
  }
  return newArr;
};

console.log(noRepeat2(arr));

// with filter
const noDup = (arr) =>
  arr.filter((element, index) => {
    if (arr.indexOf(element) === index) return element;
  });

console.log(noDup(arr));

// with includes

const noDup2 = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) newArr.push(num);
  }
  return newArr;
};

console.log(noDup2(arr));
