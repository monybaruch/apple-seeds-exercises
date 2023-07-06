function tellFortune(jobTitle, loction, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${loction} married to ${partnerName} with ${numberOfChildren} children`;
}

const myDesire = tellFortune("Web Developer", "Japan", "Alice", "0");

console.log(myDesire);
