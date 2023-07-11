// 1. Fill an array with 100 of the same object using the array fill
// method.

const arr = Array.from({ length: 100 });
console.log(arr);

arr.fill("b");
console.log(arr);
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.

let obj = {
  name: "mony",
  lname: "baruch",
  age: 34,
  gender: "male",
};

console.log(Object.values(obj));

// 4. Convert an array into one object.

const array = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const object = array.reduce((acc, { key, value }) => {
  acc[key] = value;
  return acc;
}, {});

console.log(object);

// 5. Find out if an array is an array.
arr3 = [1, 2, 3, 4];

console.log(Array.isArray(arr3));

// 6. Copy an array.

console.log(arr3.slice(2));

console.log(arr3);

// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified.

const numbers = [[1], [2], [3]];
let numbersCopy = [...numbers];
numbersCopy[3] = [4];
console.log(numbersCopy);
console.log(numbers);
