let notaPercent = 80;

if (notaPercent >= 0 && notaPercent <= 100) {
  let grade;
  if (notaPercent < 50) {
    grade = "F";
  }
  else if (notaPercent >= 50 && notaPercent < 60) {
    grade = "E";
  } else if (notaPercent >= 60 && notaPercent < 70) {
    grade = "D";
  } else if (notaPercent >= 70 && notaPercent < 80) {
    grade = "C";
  } else if (notaPercent >= 80 && notaPercent < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  console.log('O conceito final do aluno é',grade,'.');
}
else {
  console.log('O valor da nota é inválido.');
}