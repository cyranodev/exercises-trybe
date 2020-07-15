let n = 5
let nColunas = '';
let nEspacos = '';

if (n > 1) {
  for (i = 0; i <= n; i++) {
    nColunas += ' ';
  }
  for (iRemover = 1; iRemover <= n; iRemover++) {
    nColunas = nColunas.substring(1, (nColunas.length - 1)) + '*';
    console.log(nColunas);
    nColunas += '*';
  }
}

