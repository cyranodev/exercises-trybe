const divide = (number, div) => number / div;

const test = async () => {
  const randomNumber = Math.round(Math.random() * (50 - 1)) + 1;
  const arrayRandom = [];
  for (let counter = 0; counter < 10; counter += 1) {
    arrayRandom.push(randomNumber ** 2)
  }
  const sumArray = arrayRandom.reduce((sum, currNumber) => sum + currNumber);
  if (sumArray >= 8000) {
    throw new Error(`É mais de oito mil! Essa promise deve estar quebrada!`);
  }
  return sumArray;
};

async function doTest() {
  try {
    const array = await test();
    array = array.reduce((sum, currNumber) => sum + currNumber);
    console.log(array);
  }
  catch (error) {
    console.log(error);
  }
}

doTest();