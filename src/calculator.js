class Calculator {
  static add(a, b) {
    if (typeof a !== typeof b) {
      throw new Error('Both arguments must be of the same type');
    }
    if (typeof a === 'number' && (Number.isNaN(a) || Number.isNaN(b))) {
      throw new Error('Both arguments must be valid numbers');
    }
    if (typeof a !== 'number' && typeof a !== 'bigint') {
      throw new Error('Both arguments must be numbers or bigints');
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== typeof b) {
      throw new Error('Both arguments must be of the same type');
    }
    if (typeof a === 'number' && (Number.isNaN(a) || Number.isNaN(b))) {
      throw new Error('Both arguments must be valid numbers');
    }
    if (typeof a !== 'number' && typeof a !== 'bigint') {
      throw new Error('Both arguments must be numbers or bigints');
    }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof a !== typeof b) {
      throw new Error('Both arguments must be of the same type');
    }
    if (typeof a === 'number' && (Number.isNaN(a) || Number.isNaN(b))) {
      throw new Error('Both arguments must be valid numbers');
    }
    if (typeof a !== 'number' && typeof a !== 'bigint') {
      throw new Error('Both arguments must be numbers or bigints');
    }
    return a * b;
  }

  static divide(a, b) {
    if (typeof a !== typeof b) {
      throw new Error('Both arguments must be of the same type');
    }
    if (typeof a === 'number' && (Number.isNaN(a) || Number.isNaN(b))) {
      throw new Error('Both arguments must be valid numbers');
    }
    if (typeof a !== 'number' && typeof a !== 'bigint') {
      throw new Error('Both arguments must be numbers or bigints');
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
};

export default Calculator;