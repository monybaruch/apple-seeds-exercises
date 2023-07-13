/*Create an object called ‘myCountry’ 
for a country of your choice, containing properties ‘country’, 
‘capital’, ‘language’, ‘population’ and ‘neighbours’ (an array)
Add a method to the object called 'describe' to the 'myCountry' object. With the help of the ‘this’ 
keyword, this method will log a string like this to the console: ‘Finland has 6 million people, their mother 
tongue is Finnish, they have 3 neighbouring countries and a capital called Helsinki’.
Call the ‘describe method’.
 Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the 
 object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, 
 and false if there are. Use the ternary operator to set the property.*/

const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51.96,
  neighbours: ["Rusia", "China", "North Korea"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language}, 
      the have 3 neighbouring countries:${this.neighbours} and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;
    this.isIsland = !!this.neighbours.length;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
