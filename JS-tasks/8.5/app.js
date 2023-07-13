// The following exercise contains the following subjects:
// ● Objects
// Instructions
// 1. Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.

const user = {
  firstName: "mony",
  lastName: "baruch",
};

const swapObj = (user) => {
  const result = {};
  for (const key in user) {
    result[user[key]] = key;
  }
  return result;
};

console.log(swapObj(user));

function swapKeysAndValues(obj) {
  const newObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    newObj[value] = key;
  });

  return newObj;
}

// 👇️ {color: 'blue', fruit: 'apple'}
console.log(swapKeysAndValues({ blue: "color", apple: "fruit" }));
