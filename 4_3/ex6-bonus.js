let n = 37
let testePrimo = 0;

if (n > 1) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      testePrimo += 1;
    } 
  }
  if (testePrimo === 0) {
    console.log('O número é primo.');
  } else {
    console.log('O número NÃO é primo.');
  }
} else {
  console.log('erro: número deve ser maior que 1.');
}