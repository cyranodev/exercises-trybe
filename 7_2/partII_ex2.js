const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function changeObj (obj, key, value) {
  obj[key] = value;
}

changeObj(lesson2, 'turno', 'manhã');
console.log(lesson2);

function showKeys (obj) {
  console.log(Object.keys(obj));
}

showKeys(lesson1);

function objLength (obj) {
  console.log(Object.keys(obj).length);
}

objLength(lesson1);
objLength(lesson2);
objLength(lesson3);

