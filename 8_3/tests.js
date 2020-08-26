// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = () => {
  return numbers
  .filter(number => number % 2 === 0)
  .reduce((sum, currNumber) => sum + currNumber);
};

console.log(sumEven());

const getPair = (sum, number) => (number % 2 === 0) ? sum + number : sum;
const sumReduce = numbers.reduce(getPair);
console.log(sumReduce);