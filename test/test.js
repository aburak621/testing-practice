import capitalize from "../src/capitalize";

test('Capitalize a string', () => {
  expect(capitalize('kakule')).toBe('Kakule');
  expect(capitalize('bruh')).toBe('Bruh');
});

test('Capitalize string with spaces', () => {
  expect(capitalize('bruh moment')).toBe('Bruh moment');
});

test('Capitalize string starting with a number', () => {
  expect(capitalize('0hello')).toBe('0hello');
});

test('Handle non string inputs', () => {
  const x = 42;
  const obj = { y: 42 };
  expect(capitalize(x)).toBe(x);
  expect(capitalize(obj)).toBe(obj);
});