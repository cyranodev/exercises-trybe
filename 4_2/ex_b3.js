let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (i == numbers.length - 1) {
    newNumbers.push(numbers[i] * 2);
  } else {
      newNumbers.push(numbers[i + 1] * numbers[i]);
  }
}

console.log(newNumbers);