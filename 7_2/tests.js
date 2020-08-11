function newObj(obj, key, value) {
  const newKey = key;
  obj[newKey] = value;
  // console.log(obj);
}

const objeto = {
  chave: 'uhu',
  zurubu: 'tapoha',
  2: 'aha',
};

newObj(objeto, 'a-chave', 'o-valor');

console.log(Object.keys(objeto));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

let message = ``;
const messageGen = object => {
  let skills = Object.keys(object);
  skills.forEach( skill => {
    message = `${message}
    ${skill}, Nível: ${object[skill]}`
  });
  console.log(message);
}

messageGen(student1);