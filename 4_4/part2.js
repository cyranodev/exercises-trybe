// exercício 1

function testePalindrome(string) {
  let stringArray = string.split('');
  let testPalind = true;

  for (let i in stringArray) {
    if (stringArray[i] != stringArray[(stringArray.length - 1) - i]) {
      testPalind = false;
    }
  }
  return testPalind;
}

console.log(testePalindrome('desenvolvimento'),'desenvolvimento');
console.log(testePalindrome('arara'),'arara');

// exercício 2

function iDoMaior(array) {
  let iMaiorValor = 0;
  for (let i in array) {
    if (array[i] > array[iMaiorValor]) {
      iMaiorValor = i;
    }
  }
  return iMaiorValor;
}

console.log(iDoMaior([2, 3, 6, 7, 10, 1]));

// exercício 3

function iDoMenor(array) {
  let iMenorValor = 0;
  for (let i in array) {
    if (array[i] < array[iMenorValor]) {
      iMaiorValor = i;
    }
  }
  return iMaiorValor;
}

console.log(iDoMenor([2, 3, 6, 7, 10, 1]));

// exercício 4

function nomeMaior(array) {
  let iMaiorNome = array[0];
  for (let i in array) {
    if (iMaiorNome.length < array[i].length) {
      iMaiorNome = array[i];
    }
  }
  return iMaiorNome;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// exercício 5

function numeroQueMaisRepete(array) {
  let iMaisRepete = 0;
  let maisRepetido = 0;
  let repetCount = 0;
  for (let i in array) {
    let numeroTestado = array[i];
    for (let index in array) {
      if (array[index] === numeroTestado ) {
        repetCount++;
      } 
    }
    if (repetCount > maisRepetido) {
      maisRepetido = repetCount;
      iMaisRepete = i;
  }
  repetCount = 0;
  }
  return array[iMaisRepete];
}

console.log(numeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));

// exercício 6

function somatorio(n) {
  if (typeof n === 'number') {
    let acumulado = 0;
    for (let index = 0; index <= n; index++) {
      acumulado = acumulado + index;
    }
    return acumulado;
  }
}
console.log(somatorio(5));

// exercício 7

function verificaFim(string, finalString) {
  for (let i in finalString) {
    if (finalString[finalString.length - i] === string[string.length - i]) {
      fimIgual = true;
    } else {
      fimIgual = false;
    }
  }
  return fimIgual;
}

console.log(verificaFim('trybe', 'be')); // true
console.log(verificaFim('fernando','nan')); // false
console.log(verificaFim('rolando lero', 'lero lero')); // false

