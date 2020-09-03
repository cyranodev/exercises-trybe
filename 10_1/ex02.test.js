function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

test('The function type is indeed a function', () => {
  expect(typeof myRemove).toBe('function');
});

test('The function should return an array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('It should not return the removed element in array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('It should not change the array passed as parameter', () => {
  const array = [ 'a', 'b', 'c', 'd' ];
  const changedArray = myRemove(array, 'b');
  expect(array).not.toBe(changedArray);
});

test('It should return the array unchanged if non-existent value is passed', () => {
  expect(myRemove([ 1, 2, 3, 4 ], 5)).toEqual([ 1, 2, 3, 4 ]);
});