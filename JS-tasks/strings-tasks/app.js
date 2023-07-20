// 1

const toTitleCase = (characterName) => {
  return characterName
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(toTitleCase("Iron Warrior the warrior of justice"));

function toTitleCase2(characterName) {
  characterName = str.toLowerCase().split(" ");
  for (let i = 0; i < characterName.length; i++) {
    characterName[i] =
      characterName[i].charAt(0).toUpperCase() + characterName[i].slice(1);
  }
  return characterName.join(" ");
}

console.log(toTitleCase("Iron Warrior the warrior of justice"));

// 2

const inventory = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron mace"];
const searchInventory = (inventory, query) => {
  return inventory.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};

console.log(searchInventory(inventory, "steel"));

// 3

const formatNPCName = (NpcName) => {
  let swapNpcName = NpcName.split(" ");
  swapNpcName[0] = swapNpcName.splice(1, 1, swapNpcName[0])[0];
  return swapNpcName;
};

console.log(formatNPCName("Goblin Grunty"));

// 3.1- 1 more easy way
const formatNPCName2 = (NpcName) => {
  let swapNpcName = NpcName.split(" ");
  [swapNpcName[0], swapNpcName[1]] = [swapNpcName[1], swapNpcName[0]];
  return swapNpcName;
};
console.log(formatNPCName2("Goblin Grunty"));

// 4.

const parseDuration = (duration) => {
  let obj = {
    hours: [],
    minutes: [],
  };
  const [hoursStr, minutesStr] = duration.split(" ");
  const parsedHoursStr = parseInt(hoursStr);
  const parsedMinutesStr = parseInt(minutesStr);
  [obj.hours, obj.minutes] = [parsedHoursStr, parsedMinutesStr];
  return obj;
};

console.log(parseDuration("4h 45min"));

// refactoring
const parseDuration2 = (duration) => {
  const [hoursStr, minutesStr] = duration.split(" ");
  return (obj = {
    hours: parseInt(hoursStr),
    minutes: parseInt(minutesStr),
  });
};
console.log(parseDuration2("4h 45min"));
// 5.

const getGameAcronym = (title) => {
  return title
    .split(" ")
    .map((title) => title[0].toUpperCase())
    .join(" ");
};
console.log(getGameAcronym("the best hero in the world"));

// 6.
// Concatenate Character Details
// : Write a function,
// getCharacterDetails(character)
// that takes an object with character details like name, class, and level and returns a singlestring that combines
//all this information.
// Input:
// { name: "Iron Warrior", class: "Warrior", level: 10 }
// Output:
// "name:Iron Warrior, class: Warrior, level: 10"
// const characterDetails = { name: "Iron Warrior", class: "Warrior", level: 10 };

// const getCharacterDetails = (characterDetails) => {
//   const keysToStr = Object.keys(characterDetails);
//   const valuesToStr = Object.values(characterDetails);
// };

// console.log(getCharacterDetails(characterDetails));

// 7.

const createSlug = (location) => {
  return location.toLowerCase().split(" ").join("-");
};

console.log(createSlug("Dark Forest"));

// 8.

const trimDescription = (description, maxLength) => {
  return (trimDes = description.slice(0, maxLength));
};

console.log(
  trimDescription(
    "Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.",
    51
  )
);

// 9

const splitMonsters = (monsters) => {
  return monsters.split(", ");
};

console.log(splitMonsters("Goblin, Orc, Dragon"));

//10
const decodeSecret = (secret) => {
  return secret.replace(/3/g, "e").replace(/1/g, "i").replace(/4/g, "a");
};
console.log(decodeSecret("Th3 s3cr3t l41r 1s und3r th3 br1dg3"));

function decodeSecret2(secret) {
  mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };

  return secret
    .split("")
    .map((char) => {
      if (mapping[char]) {
        return mapping[char];
      } else {
        return char;
      }
    })
    .join("");
}

console.log(decodeSecret2("Th3 s3cr3t l41r 1s und3r th3 br1dg3"));

// refactoring
function decodeSecret3(secret) {
  mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };

  return secret
    .split("")
    .map((char) => (mapping[char] ? mapping[char] : char))
    .join("");
}

console.log(decodeSecret3("Th3 s3cr3t l41r 1s und3r th3 br1dg3"));

let age = 44;
let oldage = age;
age = 45;
console.log(age, oldage);
