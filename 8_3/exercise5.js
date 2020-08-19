    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((sum, curr) =>
    sum + curr.split('').reduce((innerSum, char) => (char === 'a' || char === 'A') ?
    innerSum + 1
    : innerSum,
    0),
    0)
}

assert.deepEqual(containsA(), 20);