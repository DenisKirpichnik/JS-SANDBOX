// function curry(func) {
//   return function wrapper(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (..._args) {
//         return wrapper.apply(this, args.concat(..._args));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying
const curry = (argsLengh = 0, fn, ...args) =>
  args.length > argsLengh
    ? fn(...args)
    : (..._args) => curry(argsLengh, fn, ...[...args, ..._args]);

// var curry = (n, f, ...a) =>
//   a.length >= n ? f(...a) : (...ia) => curry(n, f, ...[...a, ...ia]);

var sum = (...args) => args.reduce((a, b) => a + b);

var add = curry(2, sum);

console.log(add(1, 2, 3)); // returns 6

const flatArrStack = (input) => {
  const stack = input;
  const res = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.unshift(next);
    }
  }

  return res;
};

console.log(flatArrStack([1, [2, 3], [4, [5, 6]]]));
