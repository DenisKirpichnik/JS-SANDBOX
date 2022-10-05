const makeAdder = (a) => (b) => a + b;

const add10 = makeAdder(10);

// console.log(add10(5));

// const currySum = (a) => (b) => b ? currySum(a + b) : a;

// const myCurrySum = (firstNum) => {
//   let result = [firstNum];

//   function add(anotherNum) {
//     if (anotherNum === undefined) {
//       result = result.reduce((acc, num) => acc + num, 0);
//     } else {
//       result.push(anotherNum);
//     }
//     return typeof anotherNum === "undefined" ? result : add;
//   }

//   return add;
// };

// function weirdSum(a) {
//   const func = function (b) {
//     return weirdSum(a + b);
//   };

//   func.valueOf = func.toString = function () {
//     return a;
//   };

//   return func;
// }

// console.log(+weirdSum(3)(5)(2));

const currySum = (a) => (b) => b ? currySum(a + b) : a;

function weirdSum(a) {
  const func = function (b) {
    return weirdSum(a + b);
  };

  func.valueOf = func.toString = function () {
    return a;
  };

  return func;
}

function mySum(a) {
  let res = a;

  function add(b) {
    if (b) {
      res += b;
    } else {
      return res;
    }

    return typeof b === "undefined" ? res : add;
  }

  return add;
}

// console.log(mySum(2)(3)());

// Suppose, there are two numbers 25 and 23.

let a = 25;

let b = 23;

a = a + b; // 48
b = a - b; // 25
a = a - b;
console.log(a);
