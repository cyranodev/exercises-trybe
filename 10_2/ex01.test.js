const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('function uppercase should be a function', () => {
  expect(typeof uppercase).toBe('function');
});

test('function should return uppercase string', () => {
  uppercase('test', (string) => {
    expect(string).toBe('TEST');
  });
});