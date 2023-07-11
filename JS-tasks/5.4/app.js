/*Create a function that receives one argument, a string color.
Create a switch statement that:
1. If the color is yellow, pink, or orange return from the
function “light color”.
2. If the color is a blue, purple, or brown return from the
function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive*/

const colorPicker = (color) => {
  switch (color.toLowerCase()) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
};

console.log(colorPicker("Brown"));
console.log(colorPicker("YeLlow"));
console.log(colorPicker("red"));
