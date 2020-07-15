let n = 9
let nColunas = '';

if ((n % 2 != 0)) {
  for (i = 0; i <= (n / 2); i++) {
    nColunas += ' ';
  }
  
  nColunas += '*';

  for (iRemover = 0; iRemover <= (n / 2); iRemover++) {
    nColunas = nColunas.substring(1, (nColunas.length - 1)) + '*';
    console.log(nColunas);
    nColunas += '**';
  }
} else {
  console.log('erro: número deve ser ímpar.')
}

