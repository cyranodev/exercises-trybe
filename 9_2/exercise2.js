const test = new Promise((resolve, reject) => {
  const randomNumber = Math.round(Math.random() * (50 - 1)) + 1;
  const array = [];
  for (let counter = 0; counter < 10; counter += 1) {
    array.push(randomNumber ** 2)
  }
  const sumArray = array.reduce((sum, currNumber) => sum + currNumber);
  if (sumArray >= 8000) {
    return reject(console.log(`Eita, deu mais de 8 mil!`));
  }
  resolve(sumArray);
})
  .then(sum => console.log(`A soma deu ${sum}!`))
  .catch(error => error);