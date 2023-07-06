// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.

function calcCircleArea(radius) {
  return 2 * Math.PI * radius;
}

const area = calcCircleArea(88);
const rounded = area.toFixed(2);
console.log(rounded);
