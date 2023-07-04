// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.includes(username) ||
    // password.indexOf(" ") !== -1
    password.includes(" ")
  ) {
    return false;
  }
  return true;
}
console.log(isValidPassword("dogcat12", "dogcat"));

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
