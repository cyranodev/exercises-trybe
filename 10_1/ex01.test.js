const { describe } = require("yargs");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('checks type is function', () => {
  expect(typeof sum).toBe('function');
});

test('should not accept strings', () => {
  expect(() => {
    sum(2, '3');
  }).toThrow('parameters must be numbers');
});

test('should not accept objects', () => {
  expect(() => {
    sum(2, {});
  }).toThrow('parameters must be numbers');
});

test('should not accept arrays', () => {
  expect(() => {
    sum(2, []);
  }).toThrow('parameters must be numbers');
});