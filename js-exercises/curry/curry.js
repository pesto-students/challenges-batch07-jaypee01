/* eslint-disable linebreak-style */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(func, args);
    }
    return function (...args2) {
      return curried.apply(func, args.concat(args2));
    };
  };
}
export {
  curry,
};
