let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

console.log('');

console.log('Exercício 1:');
console.log('Bem-vinda(o),', info.personagem + '!', '\n');

console.log('Exercício 2:');
console.log(info, '\n');

console.log('Exercício 3:');
for (key in info) { 
  console.log(key);
}
console.log('');

console.log('Exercício 4:');
for (key in info) { 
  console.log(info[key]);
}

console.log('');

console.log('Exercício 5:');
for (key in info) {
  if (key != 'recorrente') { 
    console.log(info[key],'e',info2[key]);
  }
  else {
    console.log('Ambos recorrentes.');
  }
}