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
    expect(()=>StringCalculator.add({})).toThrow('Invalid input type');
  });
  test('add numbers with newlines and commas returns sum', () => {
    expect(StringCalculator.add('1\n2,3')).toBe(6);
  });
    test('add numbers with newlines and commas returns sum', () => {
      expect(StringCalculator.add('1\n2,3\n5\n,')).toBe(11);
    });
  test('custom delimiter returns sum', () => {
    expect(StringCalculator.add('//;\n1;2')).toBe(3);
  });
  test('custom delimiter returns sum', () => {
    expect(StringCalculator.add('//*\n1*2')).toBe(2);
  });
  test('add negative number will throw exception', () => {
    expect(() => StringCalculator.add('-1')).toThrow('Negative numbers not allowed -1');
  });

  test('add with multiple negatives throws exception listing all', () => {
    expect(() => StringCalculator.add('2,-0,-3,-5')).toThrow('Negative numbers not allowed -3,-5');
  });
  test('add negatives number with custom delimiter throws exception listing all', () => {
    expect(() => StringCalculator.add('//;\n2;-0;-3;-5')).toThrow('Negative numbers not allowed -3,-5');
  });
    test('add negatives number with custom delimiter throws exception listing all', () => {
      expect(() => StringCalculator.add('//;\n2;-0;-3;-5,')).toThrow('Negative numbers not allowed -3,-5');
    });
});