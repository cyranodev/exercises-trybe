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
  resolve(sumArray);
})
  .then(sumArray => [ 2, 3, 5, 10 ].map(value => sumArray / value))
  .then(array => console.log(array))
  .catch(error => error);