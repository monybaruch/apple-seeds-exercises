// Let us self-learn something. You come to your new workplace and you are an expert in the technologies your company is working with. But all of the sudden your boss says. We want to implement a feature with dates. This will happen all the time in your career. So let's roll up our sleeves and start googling. How to …. “date.js”.
// And as always the MDN docs are a great source Find how to get the following:
// Name of the current day e.g. Sunday
// Current day of the month e.g. 31
// Current month e.g January
// Current Year e.g 2021

// Create a function that will return a string in the following format: `Today is Sunday the 31 of January 2021’
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDate() {
  const getDate = new Date();

  const getDayIndex = getDate.getUTCDay();

  const getMonthIndex = getDate.getUTCDate();

  const getMonth = monthNames[getMonthIndex];

  const getDayOfMonth = getDate.getUTCDate();

  const getYear = getDate.getUTCFullYear();

  const getDay = dayNames[getDayIndex];
  return `Today is ${getDay} the ${getDayOfMonth} of ${getMonth} ${getYear}`;
}

console.log(getDate());
