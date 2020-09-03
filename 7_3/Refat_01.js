const greetPeople = (people) => {
  let greeting = 'Hello ';
  const array = [];
  for (const person in people) {
    array.push(greeting + people[person]);
  }
  return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(typeof greetPeople(parameter), 'object');
assert.deepEqual(greetPeople(parameter), result);