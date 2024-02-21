// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  let normalWord = "";
  for (let i = 0; i < str.length; i++) {
    normalWord = str[i] + normalWord;
  }
  let backwardsWord = "";
  for (let i = 0; i < normalWord.length; i++) {
    backwardsWord = normalWord[i] + backwardsWord;
  }
  if (backwardsWord === normalWord) {
    return true;
  } else {
    return false;
  }
};

const result1 = palindrome("abba");
const result2 = palindrome("abcdefg");

console.log(result1);
console.log(result2);
