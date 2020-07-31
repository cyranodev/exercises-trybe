let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO',];

let selectEstado = document.querySelector('#estado');

for (let i = 0; i < estados.length; i += 1) {
  let option = document.createElement('option');
  option.value = estados[i];
  option.id = estados[i];
  option.innerHTML = estados[i];
  selectEstado.appendChild(option);
}
