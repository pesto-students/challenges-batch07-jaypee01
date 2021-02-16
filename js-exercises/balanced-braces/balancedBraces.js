function balancedBraces(expression) {
  const expressionStack = [];
  const openBracketMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closedBracketMap = {
    '}': true,
    ']': true,
    ')': true,
  };
  for (let counter = 0; counter < expression.length; counter += 1) {
    const char = expression[counter];
    if (openBracketMap[char]) {
      expressionStack.push(char);
    } else if (closedBracketMap[char]) {
      if (openBracketMap[expressionStack.pop()] !== char) {
        return false;
      }
    }
  }
  return expressionStack.length === 0;
}

export {
  balancedBraces,
};
