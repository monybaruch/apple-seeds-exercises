// The following exercise contains the following subjects:
// ● slice
// Instructions
// You have this array:

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

// Use slice create a new array that will remove all the
// elements from the array except “Orange” and “Lemon”

const filteredFruitsArr = fruits.slice(1, 3);

console.log(filteredFruitsArr);

// 1 more way but kinda long

const sortedFruits = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (element.includes('Orange') || element.includes('Lemon')) newArr.push(element);
  });
  return newArr;
};

console.log(sortedFruits(fruits));
