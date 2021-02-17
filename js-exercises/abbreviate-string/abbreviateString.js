/* eslint-disable linebreak-style */
function abbreviateString(sentence) {
  //  Checking for invalid inputs
  try {
    if (!sentence && typeof sentence !== 'string') {
      throw new Error('Invalid Parameters');
    }
    const words = sentence.split(' ');
    if (words.length === 1) {
      return words[0];
    } return `${words[0]} ${words[words.length - 1][0].toUpperCase()}.`;
  } catch (e) {
    throw e.message;
  }
}

export { abbreviateString };
