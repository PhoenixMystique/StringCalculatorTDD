const StringCalculator = require('../service/strCalculator.service');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    // No need to create a new instance of the StringCalculator class as add() is a static method
  });

  test('nomal string with numbers, seprated by `,`', () => {
    expect(StringCalculator.add('1,2,3')).toBe(6);
  });
  test('single number in string', () => {
    expect(StringCalculator.add('1')).toBe(1);
  });
  test('single number in string', () => {
    expect(StringCalculator.add('1')).toBe(1);
  });
  test('empty string', () => {
    expect(StringCalculator.add('')).toBe(0);
  });
  test('if data type is different', () => {
    expect(StringCalculator.add({})).toBe("Invalid input type");
  });
});