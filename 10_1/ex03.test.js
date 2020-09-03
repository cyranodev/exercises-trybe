function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

test('The function type is indeed a function', () => {
  expect(typeof myRemoveWithoutCopy).toBe('function');
});

test('The function should return an array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('It should not return the removed element in array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('It should not change the array passed as parameter', () => {
  const array = [ 'a', 'b', 'c', 'd' ];
  const changedArray = myRemoveWithoutCopy(array, 'b');
  expect(array).toBe(changedArray);
});

test('It should return the array unchanged if non-existent value is passed', () => {
  expect(myRemoveWithoutCopy([ 1, 2, 3, 4 ], 5)).toEqual([ 1, 2, 3, 4 ]);
});