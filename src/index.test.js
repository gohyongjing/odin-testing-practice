const index = require('./index');

test('capitalise 1 letter', () => {
  expect(index.capitalise('h')).toBe('H');
});

test('capitalise only first letter', () => {
  expect(index.capitalise('hello')).toBe('Hello');
});

test('works with non alphabetical characters', () => {
  expect(index.capitalise('hello world!')).toBe('Hello world!');
});

test('works with already capitalised characters', () => {
  expect(index.capitalise('Hi')).toBe('Hi');
});

test('reverses 2 characters', () => {
  expect(index.reverseString('Ah')).toBe('hA');
});

test('works for empty strings', () => {
  expect(index.reverseString('')).toBe('');
});

test('reverses 1 character', () => {
  expect(index.reverseString('F')).toBe('F');
});

test('reverses string of even length', () => {
    expect(index.reverseString('HelloWorld')).toBe('dlroWolleH');
});

test('reverses string of odd length', () => {
    expect(index.reverseString('HelloWorld!')).toBe('!dlroWolleH');
});

test('test calculator add', () => {
    expect(index.calculator.add(3, 8)).toBe(11);
});

test('test calculator add large numbers', () => {
    expect(index.calculator.add(10345, 108017)).toBe(118362);
});

test('test calculator subtract', () => {
    expect(index.calculator.subtract(3456, 1992)).toBe(1464);
});

test('test calculator subtract to get negative numbers', () => {
    expect(index.calculator.subtract(135, 458)).toBe(-323);
});

test('test calculator multiply', () => {
    expect(index.calculator.multiply(3, 21)).toBe(63);
});

test('test calculator multiply negative numbers', () => {
    expect(index.calculator.multiply(-4, -9)).toBe(36);
});

test('test calculator divide', () => {
    expect(index.calculator.divide(12, 3)).toBe(4);
});

test('test calculator divide to get decimal numbers', () => {
    expect(index.calculator.divide(10, 3)).toBe(3.3333333333333333);
});

test('test analyse array of 1 number', () => {
    const result = index.analyseArray([-43]);
    expect('average' in result).toBe(true);
    expect('min' in result).toBe(true);
    expect('max' in result).toBe(true);
    expect('length' in result).toBe(true);

    expect(result['average']).toBe(-43);
    expect(result['min']).toBe(-43);
    expect(result['max']).toBe(-43);
    expect(result['length']).toBe(1);
});

test('test analyse array of several numbers', () => {
    const result = index.analyseArray([1,8,3,4,2,6]);
    expect('average' in result).toBe(true);
    expect('min' in result).toBe(true);
    expect('max' in result).toBe(true);
    expect('length' in result).toBe(true);

    expect(result['average']).toBe(4);
    expect(result['min']).toBe(1);
    expect(result['max']).toBe(8);
    expect(result['length']).toBe(6);
});