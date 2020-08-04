let estados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amazonas',
  AP: 'Amapá',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MG: 'Minas Gerais',
  MS: 'Mato Grosso do Sul',
  MT: 'Mato Grosso',
  PA: 'Pará',
  PB: 'Paraíba',
  PE: 'Pernambuco',
  PI: 'Piauí',
  PR: 'Paraná',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RO: 'Rondônia',
  RR: 'Roraima',
  RS: 'Rio Grande do Sul',
  SC: 'Santa Catarina',
  SE: 'Sergipe',
  SP: 'São Paulo',
  TO: 'Tocantins',
};

let selectEstado = document.querySelector('#estado');
let emailValido = false;

for (const property in estados) {
  let option = document.createElement('option');
  option.value = `${property}`;
  option.id = `${property}`;
  option.innerHTML = `${estados[property]}`;
  selectEstado.appendChild(option);
}

function checkMail(event) {
  if (event.target.value !== null) {
    const emailText = event.target.value;
    const regEx = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'i');
    if (!regEx.test(emailText)) {
      alert('email inválido!');
      emailValido = false;
    } else {
      emailValido = true;
    }
  }
}

const emailInput = document.querySelector('#email');
emailInput.addEventListener('change', checkMail);

const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth() + 1;
const dia = dataAtual.getDate();
const dataInicio = document.querySelector('#data-inicio');
let dataTeste = '';
let dataTesteNumber = [];
let dataValida = false;

function checkDate() {
  dataTeste = document.querySelector('#data-inicio').value.split('-');
  for (i = 0; i < dataTeste.length; i += 1) {
    dataTesteNumber[i] = parseInt(dataTeste[i]);
  }
  if (dataTesteNumber[0] > 0 && dataTesteNumber[0] < ano) {
    if (dataTesteNumber[1] > 0 && dataTesteNumber[1] <= 12) {
      if (dataTesteNumber[2] > 0 && dataTesteNumber[2] <= 31) {
        dataValida = true;
      }
    }
  } else if (dataTesteNumber[0] === ano && dataTesteNumber[1] < mes && dataTesteNumber[2] <= 31) {
    dataValida = true;
  } else if (dataTesteNumber[0] === ano && dataTesteNumber[1] === mes && dataTesteNumber[2] <= dia) {
    dataValida = true;
  } else {
    dataValida = false;
  }
}

dataInicio.addEventListener('change',checkDate);

function criarDiv() {
  // Criar DIV
  const elementoDiv = document.createElement('div');
  document.body.appendChild(elementoDiv);
  const form = document.querySelector('cv-form');
  // LOOP nos INPUTS;
  // for () {}
    // PEGAR LABEL -> PRINTAR
    //PEGAR VALUE -> PRINTAR

}

let btnSubmit = document.querySelector('#submit');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  // checkMail();
  // checkDate();
  if (dataValida && emailValido) {
    criarDiv();
  } else {
    console.log('corrija seu form');
  }
});

