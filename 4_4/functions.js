// exercicio 1 - 4_1
function ex01a (a, b) {
  console.log('O resultado da adição é',a + b);
}

// exercicio 2 - 4_1
function ex01b (a, b) {
  console.log('O resultado da subtração é',a - b);
}

// exercicio 3 - 4_1
function ex01c (a, b) {
  console.log('O resultado da multiplicação é',a * b);
}

// exercicio 4 - 4_1
function ex01d (a, b) {
  console.log('O resultado da divisão é',a / b);
}

// exercicio 5 - 4_1
function ex01e (a, b) {
  console.log('O resultado do módulo de a/b é',a % b);
}

// exercicio 2 - 4_1
function ex02 (a, b) {
  let msg = 'o maior número é:';
  let maiorNum = (a > b) ? console.log(msg,a) : console.log(msg,b);
}

// exercicio 3 - 4_1
function ex03 (a, b, c) {
  let msg = 'o maior número é:';
  let maiorNum = (a > b && a > c) ?
    console.log(msg,a) :
    (b > a && b > c) ?
      console.log(msg,b) :
      console.log(msg,c);
}

// exercicio 4 - 4_1
function ex04 (num) {
  let sinalDoNum = (num > 0) ?
    console.log(num,'is positive.') :
    (num < 0) ?
      console.log(num,'is negative.') :
      console.log(num,'is zero.');
}

// exercicio 5 - 4_1
function ex05 (ang1, ang2, ang3) {
  let angTriangle = ((ang1 + ang2 + ang3) === 180) ? true : false;
  console.log(angTriangle);
}

// exercicio 6 - 4_1
function ex06 (chessPiece) {
  if (typeof chessPiece === 'string') {
    let pecaLowerCase = chessPiece.toLowerCase();
    switch (pecaLowerCase) {
      case 'pawn':
        console.log(pecaLowerCase,'-> one or two squares forward');
        break;
      case 'knight':
        console.log(pecaLowerCase,'-> moves in L-shaped strikes');
        break;
      case 'bishop':
        console.log(pecaLowerCase,'-> moves in diagonals');
        break;
      case 'rook':
        console.log(pecaLowerCase,'-> moves in straight lines');
        break;
      case 'queen':
        console.log(pecaLowerCase,'-> moves in straight or diagonal lines');
        break;
      case 'king':
        console.log(pecaLowerCase,'-> moves to any square closest to him');
        break;
      default:
        console.log("That's not a chess piece, lad.");
    }
  }
  else {
    console.log('invalid type for chess piece.');
  }
}

// exercicio 7 - 4_1
function ex07 (nPercent) {
  if (nPercent >= 0 && nPercent <= 100) {
    let grade;
    if (nPercent < 50) {
      grade = "F";
    }
    else if (nPercent >= 50 && nPercent < 60) {
      grade = "E";
    } else if (nPercent >= 60 && nPercent < 70) {
      grade = "D";
    } else if (nPercent >= 70 && nPercent < 80) {
      grade = "C";
    } else if (nPercent >= 80 && nPercent < 90) {
      grade = "B";
    } else {
      grade = "A";
    }
    console.log('O conceito final do aluno é',grade + '.');
  }
  else {
    console.log('O valor da nota é inválido.');
  }
}

// exercicio 8 - 4_1
function ex08 (num1, num2, num3) {
  let result = false;
  if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
}

// exercicio 9 - 4_1
function ex09 (num1, num2, num3) {
  let result = false;
  if (num1 % 3 == 0 || num2 % 3 == 0 || num3 % 3 == 0) {
    let result = true;
  } else {
    result = false;
  }
  console.log(result);
}

// exercicio 10 - 4_1
function ex10 (pCost, pPrice) {
  if (pCost > 0 || pPrice > 0) {
    let profit = (pPrice - (pCost * 1.2)) * 1000;
    console.log('O lucro da empresa com a venda de mil produtos será de', profit, '.');
  } else {
    console.log('Erro: valores menores que zero não são aceitos.');
  }
}

// exercicio 11 - 4_1
function ex11 (salarioBruto) {
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
}