// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let number = (n < 0) ? -n : n;
  const array = number.toString().split('');
  const string = array
    .map((integer, i) => array[array.length -1 -i ])
    .join('');
    return (n < 0) ? Number(string) * -1 : Number(string);
}

module.exports = reverseInt;
