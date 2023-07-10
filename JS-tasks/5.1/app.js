/*Create a function named countryToLiveIn that takes four parameters: language, isIsland, population,
and country.
The isIsland parameter should have a value of true or false,
the population parameter should be an integer, and the country parameter should be a string representing a country.
The language parameter should also be a string representing a language.
Imagine that Sarah is searching for a new country to live in. She has specific criteria: the country should speak English,
 have a population of less than 50 million people, and not be an island. You need to write an if
statement inside the countryToLiveIn function to help Sarah determine if a given country meets her criteria.
Within the if statement, create a condition that accounts for all of Sarah's criteria. 
Take your time to construct 
the condition accurately, and refer to the instructions as needed.
If the given country meets all of Sarah's criteria, use console.log to output a message like this: 
"You should consider living in [country]". 
// Replace [country] with the name of the country passed as an argument to the function.
If the given country does not meet all of the criteria, use console.log to output a message like this:
"[country] does not meet your criteria". Again, replace [country] with the name of the country passed as 
an argument.
To test the function, call countryToLiveIn with different 
arguments and observe the console output to see if the country meets Sarah's criteria or not. 
You can temporarily modify the argument values to test different 
scenarios and check if the condition inside the if statement behaves as expected.*/

const countryToLiveIn = (language, population, isIsland, country) => {
  if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should consider living in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
};

countryToLiveIn("English", 40, false, "Canada");

const countryToLiveIn2 = (language, isIsland, population, country) =>
  language === "English" && !isIsland && population < 50
    ? `You should live in ${country}`
    : `${country} does not meet your criteria`;

console.log(countryToLiveIn2("English", false, 39, "Neverland"));

console.log(countryToLiveIn2("English", false, 77, "Neverland"));
