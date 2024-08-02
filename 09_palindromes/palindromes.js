const palindromes = function (string) {
  //we only consider numbers and letters. So create a var containing all valid chararacters.
  alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  //clean the string by filtering so that it only contains alphanumerical characters
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
  
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

/* ATTEMPT 2 - passes 7/8 tests (last test passes but no in this function)
function containsSpecialCharacter(str) {
	const specialChars = ['!', ',', '.', '?', ' '];
  return str.split('').some(char => specialChars.includes(char));
}

const palindromes = function (string) {
	let reverse;

	if (containsSpecialCharacter(string) === true) {
  	reverse = string.split("?.,").reverse().join("");
  } else {
  	reverse = string.split("").reverse().join("");
  }

  for (let i = 0; i < (string.length / 2); i++) {
    if (string[i] != reverse[i]) {
      return false;
    }
  }
  return true;
} 
*/

/*  ATTEMPT 1, passes 6/8 tests
const palindromes = function (string) {
    let reverse = string.split("?!,.").reverse().join("?!,.");

    for (let i = 0; i < (string.length / 2); i++) {
        if (string[i] != reverse[i]) {
            return false;
        }
    }
    return true;
}
*/

// Do not edit below this line
module.exports = palindromes;
