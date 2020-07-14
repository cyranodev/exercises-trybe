let salarioBruto = 4000.15;
let taxINSS = 0;

switch (true) {
  case salarioBruto <= 1556.94:
    taxINSS = .08;
    break;
  case salarioBruto > 1556.94 && salarioBruto <= 2594.92:
    taxINSS = .09;
    break;
  case salarioBruto > 2594.92 && salarioBruto <= 5189.82:
    taxINSS = .11;
    break;
  case salarioBruto > 5189.82:
    taxINSS = 570.88;
    break;
  default:
    console.log('Erro: valor de salário inválido.');
}

let salarioBase;
salarioBase = (typeof taxINSS == 'number' && taxINSS < 1) ? salarioBase = salarioBruto * (1 - taxINSS) : salarioBase = salarioBruto - taxINSS;

console.log('salário bruto:',salarioBruto);
console.log('taxa de INSS:',taxINSS);
console.log('Salário base:',salarioBase);
let taxIR = 0;

switch (true) {
  case salarioBase <= 1903.98:
    taxIR = 0;
    break;
  case salarioBase > 1903.98 && salarioBase <= 2826.65:
    taxIR = (salarioBase * .075) - 142.8;
    break;
  case salarioBase <= 2826.65 && salarioBase <= 3751.05:
    taxIR = (salarioBase * .15) - 354.8;
    break;
  case salarioBase <= 3751.05 && salarioBase <= 4664.68:
    taxIR = (salarioBase * .225) - 636.13;
    break;
  case salarioBase > 4664.68:
    taxIR = (salarioBase * .275) - 869.36;
    break;
}
console.log('taxa do IR:',taxIR);
let salarioLiq = salarioBase - taxIR;
let salarioLiqArred = salarioLiq.toFixed(2);
console.log('salário líquido:',salarioLiqArred);