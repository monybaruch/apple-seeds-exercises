// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count = count - 1;
      return count;
    },
    reset: () => {
      count = init;
      return count;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment(5));
console.log(counter.decrement(5));
console.log(counter.reset(5));

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
    console.log(i);
  }
  return arr;
};

console.log(
  map([1, 2, 3, 4, 5, 6], function plusI(n, i) {
    return n + i;
  })
);
