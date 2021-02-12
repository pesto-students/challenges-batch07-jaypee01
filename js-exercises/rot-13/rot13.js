/* eslint-disable linebreak-style */
// According to caesar algo, it takes encoded data and returns decoded data
function rot13(encodedData) {
  if (!encodedData || typeof encodedData !== 'string') return false;
  const decodedString = [];

  // for all chars in encodeddata
  for (const char of encodedData) {
    // Adjust char to previous 13th char
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      if (char.charCodeAt(0) <= 77) {
        decodedString.push(String.fromCharCode(char.charCodeAt(0) + 13));
      } else {
        decodedString.push(String.fromCharCode(char.charCodeAt(0) - 26 + 13));
      }
    } else {
      decodedString.push(char);
    }
  }

  return decodedString.join('');
}

export {
  rot13,
};
