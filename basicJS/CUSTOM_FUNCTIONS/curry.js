const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};
const totalNum = (x, y, z) => {
  return x + y + z;
};
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));

//// PARTIAL

const addPartial = (x, y, z) => {
  return x + y + z;
};
var partialFunc = addPartial.bind(this, 2, 3);
partialFunc(5); //returns 10
console.log(this);

/////
const add = (x) => (y) => x + y;
const add10 = add(10);
add10(5); // 15
add10(5); // 20

////

// when we only pass some of the args, we get a partial application
const partialApplication = curried(1)(2);
// we can finish our curried function by passing remaining args
const finalResult = partialApplication(3);
// this is also the equivalent of
const alsoFinalResult = curried(1)(2)(3);

///////

function log(type, msg) {
  if (type == "error") console.error(msg);
  if (type == "warn") console.warn(msg);
  if (type == "info") console.info(msg);
}

// Without currying
// const error = (msg) => log("error", msg);
// const warn = (msg) => log("warn", msg);
// const info = (msg) => log("info", msg);

// With currying
log = curry(log);
const error = log("error");
const warn = log("warn");
const info = log("info");

///////////////////////////
const array = [5, 23, 6, 8, 34];
let cumSum = (sum) => (value) => (sum += value);
let sumArray = array.map(cumSum(0));
console.log("TESTIS sumArray", sumArray);

// -> array
// <- [5, 23, 6, 8, 34]
// -> sumArray
// <- [5, 28, 34, 42, 76]

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) return func.apply(this, args);
//     return (...args_) => curried.apply(this, args.concat(args_));
//   };
// }

func = (a, b, c, d) => a + b + c + d;
func = curry(func);

func(a)(b)(c)(d);
func(a)(b)(c, d);
func(a)(b, c)(d);
func(a, b)(c)(d);
func(a)(b, c, d);
func(a, b, c)(d);
func(a, b, c, d);

/////////
Function.prototype.bind = function bind(context, ...args) {
  let fn = this;
  return function bound(...moreArgs) {
    return fn.call(context, ...args, ...moreArgs);
  };
};

//////////////

const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

const sum = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const addTransactionFee = sum(2);
const addTax = multiply(1.1);
const addMonthlyPromotion = multiply(0.8);

// Result of compose function below equals to addTransactionFee(addTax(addMonthlyPromotion(100)))
const paymentAmount = compose(addTransactionFee, addTax, addMonthlyPromotion)(100); // 100 * 0.8 * 1.1 + 2 = 90

/////////

function enumerable(value) {
  return function (target, propertyKey, descriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting;
  constructor(message) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const test = new Greeter();
test.greet("WOW");
