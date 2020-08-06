const emailInput = document.querySelector('#email');
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth() + 1;
const dia = dataAtual.getDate();
const elementoDiv = document.createElement('div');
const dataInicio = document.querySelector('#data-inicio');
const resetBtn = document.querySelector('#reset');
const cpfInput = document.querySelector('#cpf');
let divCreated = false;
let selectEstado = document.querySelector('#estado');
let btnSubmit = document.querySelector('#submit');
let dataTeste = '';
let dataTesteNumber = [];
let dataValida = false;
let emailValido = false;
let estados = {
  '': '',
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

for (const estado in estados) {
  let option = document.createElement('option');
  option.value = `${estado}`;
  option.id = `${estado}`;
  option.innerHTML = `${estados[estado]}`;
  selectEstado.appendChild(option);
}

selectEstado.selectedIndex = 0;

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

function criarDiv() {
  // append DIV
  document.body.appendChild(elementoDiv);
  elementoDiv.className = 'form-result';
  const formInputs = document.querySelectorAll('#cv-form input, #cv-form select, #cv-form textarea');
  // LOOP nos INPUTS;
  for( let i = 0; i < formInputs.length; i += 1) {
    const elementP = document.createElement('p');
    if(formInputs[i].type === 'radio') {
      if(formInputs[i].checked) {
      const casaRadio = document.querySelector('#cv-form input[ name="tipo-de-casa" ]:checked');    
      elementP.innerHTML = `<b>Tipo de casa:</b> ${casaRadio.value}`;
      elementoDiv.appendChild(elementP);
      }
    } else {
      elementP.innerHTML = `<b>${formInputs[i].labels[0].innerText}:</b> ${formInputs[i].value}`;
      elementoDiv.appendChild(elementP);
    }
  }
  // for (const input in formInputs) {
  //   const elementP = document.createElement('p');
  //   elementP.innerHTML = `${formInputs[input]}`;
  //   // elementP.innerHTML = `${formInputs[input].labels[0].innerText}: input.value`;
  //   elementoDiv.appendChild(elementP);
  divCreated = true;
}

function limparDiv(event) {
  if(divCreated) {
    elementoDiv.remove();
    divCreated = false;
  }
}

// emailInput.addEventListener('change', checkMail);
// dataInicio.addEventListener('change',checkDate);
// btnSubmit.addEventListener('click', (event) => {
//   event.preventDefault();
//   // checkMail();
//   // checkDate();
//   if (dataValida && emailValido) {
//     criarDiv();
//   } else {
//     console.log('corrija seu form');
//   }
// });

resetBtn.addEventListener('click', limparDiv);


window.onload = () => {
  new window.JustValidate('.js-form', {
    rules: {
      address: {
        required: true,
        maxLength: 200,
      },
      city: {
        required: true,
        maxLength: 28,
      },
      date: {
        required: true,
      },
      desc_cargo: {
        required: true,
        maxLength: 500,
      },
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        maxLength: 40,
      },
      number: {
        required: true,
      },
      radio: {
        required: true
      },
      select: {
        function: (select, value) => {
          if(value !== '') {
            return true;
          }
        }
      },
      text: {
        required: true,
        maxLength: 40,
      },
      textarea: {
        required: true,
      },
    },
    messages: {
      address: {
        required: 'Favor preencher seu endereço.'
      },
      city: {
        required: 'Favor preencher sua cidade.'
      },
      date: {
        required: 'Favor preencher a data.'
      },
      desc_cargo: {
        required: 'Digite a descrição do cargo.'
      },
      email: {
        required: 'Digite um e-mail.',
        email: 'Digite um e-mail válido.',
      },
      name: {
        required: 'Favor preencher seu nome.'
      },
      number: {
        required: 'Favor preencher seu CPF.'
      },
      radio: {
        required: 'Escolha um tipo de casa.',
      },
      select: {
        function: 'Selecione seu estado.',
      },
      text: {
        required: 'Favor preencher a informação.',
      },
      textarea: {
        required: 'Descreva seu último trabalho.',
      },
    },

    focusWrongField: true,

    submitHandler: function (form, values) {
        criarDiv();
    },
    
    invalidFormCallback: function (errors) {
        console.log(errors);
    },
  });
}
