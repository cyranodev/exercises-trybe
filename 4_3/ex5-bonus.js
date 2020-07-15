let n = 41
let nColunas = '';

if ((n % 2 != 0)) {
  for (i = 1; i <= (n / 2); i++) {
    nColunas += ' ';
  }

  nColunas += '*';
  console.log(nColunas);

  for (i = 0; i <= ((n / 2) + 1); i++) {
    if (i === 0) {
      nColunas = nColunas.substring(1, (nColunas.length - 1)) + '*';
      nColunas += ' *';
      console.log(nColunas);
    } else if (i < ((n / 2) - 2)) {
      nColunas = nColunas.substring(1, (nColunas.length - 1));
      nColunas += '  *';
      console.log(nColunas);
    } else {
      nColunas = '';
      for (i = 1; i <= n; i++) {
        nColunas += '*';
      }
      console.log(nColunas);
    }
  }
      
} else {
  console.log('erro: número deve ser ímpar.')
}

