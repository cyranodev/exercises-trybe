let n = 5
let nColunas = '';
let nLinhas = 0;

if (n > 1) {
  for (i = 1; i <= n; i++) {
    nColunas += '*';
  }

  for (iLinhas = 1; iLinhas <= n; iLinhas++) {
    console.log(nColunas);
  }
}