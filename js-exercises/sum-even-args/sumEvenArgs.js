const sumEvenArgs = (...args) => {
  let sumEven = 0;

  // return 0 if args length is smaller than 0
  if (!(args.length >= 0)) {
    return 0;
  }

  // parse args and add arg which is even number
  for (let counter = 0; counter < args.length; counter += 1) {
    if (args[counter] % 2 === 0) {
      sumEven += args[counter];
    }
  }
  return sumEven;
};

export { sumEvenArgs };
