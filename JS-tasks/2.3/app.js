// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.

function calcCircleArea(radius) {
  return 2 * Math.PI * radius;
}

const area = calcCircleArea(70);
const roundedArea = area.toFixed(2);
console.log(roundedArea);

// arrow function
const calcCircleArea2 = (radius) => {
  return (2 * Math.PI * radius).toFixed(2);
};
console.log(calcCircleArea2(9));
