let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersTotal = 0;

for (let i = 0; i < numbers.length; i += 1) {
  console.log(i);
  console.log(numbers[i]);
  numbersTotal = numbersTotal + numbers[i];
}

console.log(numbersTotal);