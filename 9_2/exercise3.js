const divide = (number, div) => number / div;

const test = new Promise((resolve, reject) => {
  const randomNumber = Math.round(Math.random() * (50 - 1)) + 1;
  const arrayRandom = [];
  for (let counter = 0; counter < 10; counter += 1) {
    arrayRandom.push(randomNumber ** 2)
  }
  const sumArray = arrayRandom.reduce((sum, currNumber) => sum + currNumber);
  if (sumArray >= 8000) {
    return reject(console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
  }
  const array = [];
  array.push(sumArray / 2);
  array.push(sumArray / 3);
  array.push(sumArray / 5);
  array.push(sumArray / 10);
  resolve(array);
})
  .then(array => array.reduce((sum, currNumber) => sum + currNumber))
  .then(sum => console.log(sum))
  .catch(error => error);