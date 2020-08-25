const assert = require('assert')

const sum = (...numbers) => {
  let result = 0; 
  if (numbers.length) result = numbers.reduce((sum, number) => sum + number);
  return result;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)