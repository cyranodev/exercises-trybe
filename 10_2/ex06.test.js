const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObject = Animals.find(animal => animal.name === name);
      if (animalObject) {
        return resolve(animalObject);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return  findAnimalByName(name);
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalArray = Animals.filter(animal => animal.age === age);
      if (animalArray.length > 0) {
        return resolve(animalArray);
      }

      return reject({ error: 'Nenhum animal com essa idade!' });
    }, 100);
  })
);

const getAge = (age) => {
  return  findAnimalByAge(age);
};


// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((array) => {
        expect(array).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorne um array com o(s) animal(is)', () => {
      expect.assertions(1);
      return getAge(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return getAge(3).catch(error =>
        expect(error).toEqual({ error: 'Nenhum animal com essa idade!' })
      );
    });
  });
});