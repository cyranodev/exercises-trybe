let romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function convertRomans(string) {
  let value = 0;
  let nextValue = 0;
  let stringUpper = string.toUpperCase();
  let totalSum = 0;
  for (let i in stringUpper) {
    value = romanNumbers[stringUpper[i]];
    if (typeof stringUpper[i + 1] === string) {
      nextValue = romanNumbers[stringUpper[i + 1]];
      if (value > nextValue) {
        totalSum += value;
      } 
      else {
        totalSum -= value;
      }
    }
    else {
      totalSum += value;
    }
  }
  return totalSum;
}

console.log(convertRomans('cilxxmmldc'));
