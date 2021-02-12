/* eslint-disable linebreak-style */
// Returns sum off all odd fibs less than or equal  to num
function sumFibs(num) {
  // Storing first two numbers in fibo series
  let firstNum = 1;
  let secondNum = 1;

  // Throw exception if num is not number
  if (!Number.isInteger(num)) {
    // eslint-disable-next-line no-throw-literal
    throw 'Argument is not a number!';
  }

  let thirdNum = 0;
  // Sum of all odd fibs smaller or equal to num
  let sumOfOddFibos = 0;

  // handling case, if num is 0,1,2
  switch (num) {
    case 0: return sumOfOddFibos;
    case 1: return 1;
    case 2: return 2;
    default:
  }
  // sum of odds fibs will be 2 if num > =3
  sumOfOddFibos = 2;
  for (let currentNum = 3; currentNum <= num; currentNum += 1) {
    // calculating third num
    thirdNum = firstNum + secondNum;

    // check if thirdNum is not even then
    if ((thirdNum % 2) !== 0) {
      // add thirdNum to sum if thirdNum<= num
      if (thirdNum <= num) {
        sumOfOddFibos += thirdNum;
      }
    }

    // setting firstNum and SecondNum for further fibo calculation
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return sumOfOddFibos;
}

// cache function to memoize fibos called
function cacheFunction(memoizedFibo) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = memoizedFibo(n);
    return cache[n];
  };
}
export { sumFibs, cacheFunction };
