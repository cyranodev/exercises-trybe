const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

test('Its type is indeed a function', () => {
  expect(typeof myFizzBuzz).toBe('function');
});

test('It should return fizzbuzz for number divisible by 3 and 5', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('It should return fizz for number divisible by 3', () => {
  expect(myFizzBuzz(3)).toEqual('fizz');
});

test('It should return buzz for number divisible by 5', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('It should return parameter value if it is not divisible by 3 or 5', () => {
  expect(myFizzBuzz(7)).toEqual(7);
});

test('It should return falsy value for parameter different from number', () => {
  expect(myFizzBuzz({})).toBe(false);
});