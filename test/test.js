import capitalize from '../src/capitalize';
import reverseString from '../src/reverse-string';
import Calculator from '../src/calculator';
import caesarCipher from '../src/caesar-cipher';
import analyzeArray from '../src/analyze-array';

test('Capitalize: String', () => {
  expect(capitalize('kakule')).toBe('Kakule');
  expect(capitalize('bruh')).toBe('Bruh');
});

test('Capitalize: String with spaces', () => {
  expect(capitalize('bruh moment')).toBe('Bruh moment');
});

test('Capitalize: String starting with a number', () => {
  expect(capitalize('0hello')).toBe('0hello');
});

test('Capitalize: Handle non string inputs', () => {
  const x = 42;
  const obj = { y: 42 };
  expect(capitalize(x)).toBe(x);
  expect(capitalize(obj)).toBe(obj);
});

test('Reverse String: String', () => {
  expect(reverseString('kakule')).toBe('elukak');
  expect(reverseString('bruh')).toBe('hurb');
});

test('Reverse String: Single character string', () => {
  expect(reverseString('a')).toBe('a');
});

test('Reverse String: Empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Reverse String: String with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Reverse String: String with special characters', () => {
  expect(reverseString('hello!')).toBe('!olleh');
  expect(reverseString('123@abc')).toBe('cba@321');
});

test('Reverse String: String with numbers', () => {
  expect(reverseString('12345')).toBe('54321');
});

test('Reverse String: String with mixed case letters', () => {
  expect(reverseString('HeLLo')).toBe('oLLeH');
});

test('Reverse String: Handle non-string inputs', () => {
  const x = 42;
  const obj = { y: 42 };
  expect(reverseString(x)).toBe(x);
  expect(reverseString(obj)).toBe(obj);
});

test('Calculator: Add operation', () => {
  expect(Calculator.add(1, 1)).toBe(2);
  expect(Calculator.add(1234, 6789)).toBe(8023);
});

test('Calculator: Subtract operation', () => {
  expect(Calculator.subtract(5, 3)).toBe(2);
  expect(Calculator.subtract(10, 20)).toBe(-10);
});

test('Calculator: Multiply operation', () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
  expect(Calculator.multiply(7, 8)).toBe(56);
});

test('Calculator: Divide operation', () => {
  expect(Calculator.divide(6, 3)).toBe(2);
  expect(Calculator.divide(10, 2)).toBe(5);
  expect(() => Calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});

test('Caesar Cipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('kakule', 1)).toBe('lblvmf');
});

test('Caesar Cipher: Uppercase letters', () => {
  expect(caesarCipher('HelLo', 3)).toBe('KhoOr');
});

test('Caesar Cipher: Non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World!1', 3)).toBe('Khoor, Zruog!1');
});

test('Analyze Array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('analyzeArray returns correct analysis for a given array', () => {
  const array = [1, 2, 3, 4, 5];
  const result = analyzeArray(array);
  expect(result).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});

test('analyzeArray returns correct analysis for an array with negative numbers', () => {
  const array = [-1, -2, -3, -4, -5];
  const result = analyzeArray(array);
  expect(result).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 5
  });
});

test('analyzeArray returns correct analysis for an array with mixed numbers', () => {
  const array = [1, -2, 3, -4, 5];
  const result = analyzeArray(array);
  expect(result).toEqual({
    average: 0.6,
    min: -4,
    max: 5,
    length: 5
  });
});

test('analyzeArray returns correct analysis for an array with a single element', () => {
  const array = [42];
  const result = analyzeArray(array);
  expect(result).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1
  });
});

