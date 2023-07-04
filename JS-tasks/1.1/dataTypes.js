// The following exercise contains the following subjects:
// data types

// Instructions

// You are an adventurer exploring a mysterious dungeon. As you progress deeper into the dungeon, you come across various objects. Your task is to identify the types of these objects using variables. Let's begin:
// Create a variable named message and assign it a string that says, "You enter a dimly lit room."
// Create a variable named treasureCount and assign it a number representing the number of treasures you've found so far.
// Create a variable named key and assign it an object that represents a golden key with intricate carvings.
// Create a variable named isTrapActivated and assign it a boolean value indicating whether a trap has been activated.
// Create a variable named secretPassage and assign it a value of null, indicating that you haven't found any secret passages yet.
// Create a variable named mysteriousArtifact without assigning any value, representing an undefined artifact you stumbled upon.
// Create a variable named ancientSymbol and assign it a symbol that represents an ancient symbol etched onto a stone tablet.
// Now, use console.log to display the types of each variable:

let message = "You enter a dimly lit room";

let treasureCount = 14;

let key = {
  keyDescription: "A golden key with intricate carvings",
};

let isTrapActivated = true;

let secretPassage = null;

let mysteriousArtifact;

let ancientSymbol = Symbol(
  "This is a ancient symbol that was etched into a stone tablet"
);

console.log(
  typeof message,
  typeof treasureCount,
  typeof key,
  typeof isTrapActivated,
  typeof secretPassage,
  typeof mysteriousArtifact,
  typeof ancientSymbol
);
