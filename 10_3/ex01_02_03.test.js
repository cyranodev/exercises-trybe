const service = require('./ex01');
const randomNumber = require('./ex01');

describe('Testing function randomNumber', () => {
  service.randomNumber = jest
    .fn()
    .mockReturnValue(10)
      .mockReturnValueOnce(87)
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(1);

  it('should return random numbers from 0 to 100', () => {
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    expect(service.randomNumber()).toBe(87);
    expect(service.randomNumber()).toBe(100);
    expect(service.randomNumber()).toBe(1);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(4);
  });

  test('mocked to become a subtraction function', () => {
    service.randomNumber = jest
      .spyOn(service, 'randomNumber')
        .mockImplementationOnce((a, b) => a - b)
        .mockImplementationOnce((a, b) => a - b)
        .mockImplementationOnce((a, b) => a - b);

    expect(service.randomNumber).toHaveBeenCalledTimes(4);
    expect(service.randomNumber(1, 2)).toBe(-1);
    expect(service.randomNumber(2, 2)).toBe(0);
    expect(service.randomNumber(10, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalledTimes(7);
    service.randomNumber.mockRestore();
  });

  test('mocked to become a function that multiplies 3 numbers', () => {
    service.randomNumber = jest
      .spyOn(service, 'randomNumber')
        .mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    expect(service.randomNumber(1, 2, 2)).toBe(4);
    expect(service.randomNumber(2, 2, -2)).toBe(-8);
    expect(service.randomNumber(10, 2, 2)).toBe(40);
    expect(service.randomNumber).toHaveBeenCalledTimes(3);
    service.randomNumber.mockRestore();
  });

  test('mocked to become a function that doubles a number', () => {
    service.randomNumber = jest
      .spyOn(service, 'randomNumber')
        .mockImplementation(a => a + a);

    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    expect(service.randomNumber(1)).toBe(2);
    expect(service.randomNumber(-2)).toBe(-4);
    expect(service.randomNumber(13)).toBe(26);
    expect(service.randomNumber).toHaveBeenCalledTimes(3);
    service.randomNumber.mockRestore();
  });
});