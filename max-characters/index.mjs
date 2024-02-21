// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  let maxChar = "";
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count = count + 1;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }
  return maxChar;
};

const result1 = getMaxCharacters("abcccccccd");
const result2 = getMaxCharacters("apple 1231111");

console.log(result1);
console.log(result2);
