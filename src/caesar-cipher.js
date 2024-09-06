function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    // Lowercase
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }

    // Uppercase
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }

    return char;
  }).join('');
}

export default caesarCipher;