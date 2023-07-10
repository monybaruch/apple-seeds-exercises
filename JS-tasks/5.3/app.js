/*JavaScript – Password Validation
The following exercise contains the following subjects:
● Ternaries
● Logical operators
Instructions
Create a simple password validation function that takes a
password string as an argument.
If the length of the password is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.
1. Create a function that uses an if/else conditional
expression.
*/

const passValidator = (password) => {
  if (password.length >= 7) {
    return "Strong";
  } else {
    return "Weak";
  }
};

console.log(passValidator("8788kd78"));

/*2. Create a function that uses a ternary conditional
expression.*/

const passValidator2 = (password) => {
  return password.length >= 7 ? "Strong" : "Weak";
};
console.log(passValidator2("87kd78"));

//3. Create a function that uses a && logical operator.
let passValidate2 = (password) => {
  if (password.length >= 7 && password.length <= 15) {
    return "strong";
  } else {
    return "weak";
  }
};
console.log(passValidate2("fgfgj"));
/*4. Create an “advanced” password validation function that
takes a password string as an argument.
If the password length is more than 7 characters long and
has at least one capital letter return “Very Strong”. If the
password length is only 7 characters long returns “Strong”.
If the password length is less than 7 characters long return
“Weak”
Use only a ternary conditional expression.*/

const passValidate3 = (password) => {
  return password.length > 7 && /[A-Z]/.test(password)
    ? "Vary Strong"
    : password.length === 7
    ? "Strong"
    : password.length < 7
    ? "Weak"
    : "Please enter a diffent password!";
};

console.log(passValidate3("gfdfdfdsfdfddfdfdfg"));
