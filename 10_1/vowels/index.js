// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let sum = 0;
  [ ...str.toLowerCase() ].forEach(char => {
    switch(char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        sum += 1;
      default:
        break;
    };
  });
  return sum;
}

module.exports = vowels;
