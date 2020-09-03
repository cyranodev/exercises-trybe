function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('The function type is a function indeed', () => {
  expect(typeof sum).toBe('function');
});

test('The function should sum two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

describe('Tests if function strictly accepts numbers', () => {
  it('should not accept strings', () => {
    expect(() => {
      sum(2, '3');
    }).toThrow('parameters must be numbers');
  });

  it('should not accept objects', () => {
    expect(() => {
      sum(2, {});
    }).toThrow('parameters must be numbers');
  });

  it('should not accept arrays', () => {
    expect(() => {
      sum(2, []);
    }).toThrow('parameters must be numbers');
  });

  it('should not receive null parameters', () => {
    expect(() => {
      sum(2);
    }).toThrow('parameters must be numbers');
  });
});
