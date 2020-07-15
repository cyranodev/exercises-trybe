let n = 5
let nColunas = '';
let nLinhas = 0;

if (n > 1) {
  for (let i = 1; i <= n; i++) {
    nColunas += '*';
  }

  for (let iLinhas = 1; iLinhas <= n; iLinhas++) {
    nLinhas += 1;
  }

  for (printConsole = 1; printConsole <= nLinhas; printConsole++) {
    console.log(nColunas);
  }
}

