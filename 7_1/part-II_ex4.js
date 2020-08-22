const skills = [
  'fskill1',
  'dskill2',
  'zskill3',
  'bskill4',
  'askill5',
];
let newString = '';

function xFiles(string) {
  let value = 'Bebeto';
  newString = string.replace(' x ', ` ${value} `);
  return newString;
}

function minhaMensagem(string) {
  xFiles(string);
  let sortedArray = skills.sort();
  let message = `${newString}

  Minhas cinco principais habilidades são:
  <ul>`;

  sortedArray.forEach( element =>
    message = `${message}
    <li>${element}</li>` );
  message = `${message}
  </ul>
  #goTrybe`;

  console.log(message);
}

minhaMensagem('Oi x aqui!');
