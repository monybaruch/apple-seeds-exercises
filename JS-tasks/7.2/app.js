// The following exercise contains the following subjects:
// ●	Methods

// Instructions

// you have this string:

const string = "The more you know, the more you know that you don't know";

// We want to get the index of the last occurrence of the word “you”. It should give you 42.

// You can solve this problem without the method indexOf. But
// if you can manage to do it without indexOf you will get a cookie.

const result = string.lastIndexOf('you');

console.log(result);

// with index of

let new1 = string.indexOf('you', 40);

console.log(new1);

// 1 more way but to complicated
let indices = [];
let i = string.indexOf('you');
while (i !== -1) {
  indices.push(i);
  i = string.indexOf('you', i + 1);
}
console.log(Math.max(...indices));
