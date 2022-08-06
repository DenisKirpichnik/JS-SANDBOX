const multiply = (x, y) => x * y;

const curriedMultiply = (x) => (y) => x * y;

// console.log(curriedMultiply(2)(3));

const timesTen = curriedMultiply(10);
const timesTwo = timesTen(2);
// console.log("timesTwo", timesTwo);

// const updateElemText = (id) => (content) =>
// 	(document.querySelector(`#${id}`).textContent = conter);

// const updateHeaderText = updateElemText("header");
// updateHeaderText("Hello Den");

// FUNCTION COMPOSITION

// const completeOrder = )

// const add1 = (a, b, c) => a + b + c;

// function add(a, b, c) {
// 	return a + b + c;
// }

// function add(a) {
//   return add1(b){
//     return add2(c){
//       a + b +c
//     }
//   }
// }

// const addCurry = a => b => c => a + b + c

const addCustomer =
	(fn) =>
	(...args) => {
		console.log(`saving customer info... #${args[0]}`);
		return fn(...args);
	};

const processOrder =
	(fn) =>
	(...args) => {
		console.log(`processing order #${args[0]}`);
		return fn(...args);
	};

// let completeOrder = (...args) => {
// 	console.log(`Order #${[...args].toString()} completed.`);
// };

// completeOrder = processOrder(completeOrder);
// console.log(completeOrder);
// completeOrder = addCustomer(completeOrder);
// completeOrder("1000");

function curry(fn) {
	return function wrapper(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		} else {
			return function (..._args) {
				return wrapper.apply(this, args.concat(_args));
			};
		}
	};
}

function sum(a, b, c) {
	return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying

// function curry(f) {
// 	return new Proxy(f, {
// 		apply(target, thisArg, args) {
// 			return args.length >= target.length
// 				? Reflect.apply(...arguments)
// 				: curry(target).bind(thisArg, ...args);
// 		},
// 	});
// }

function curry5(func, args, space) {
	var n = func.length - args.length; //arguments still to come
	var sa = Array.prototype.slice.apply(args); // saved accumulator array

	function accumulator(moreArgs, sa, n) {
		var saPrev = sa.slice(0); // to reset
		var nPrev = n; // to reset
		for (var i = 0; i < moreArgs.length; i++, n--) {
			sa[sa.length] = moreArgs[i];
		}
		if (n - moreArgs.length <= 0) {
			var res = func.apply(space, sa);
			// reset vars, so curried function can be applied to new params.
			sa = saPrev;
			n = nPrev;
			return res;
		} else {
			return function () {
				// arguments are params, so closure bussiness is avoided.
				return accumulator(arguments, sa.slice(0), n);
			};
		}
	}
	return accumulator([], sa, n);
}

function add(a, b, c) {
	if (arguments.length < this.add.length) {
		return curry5(this.add, arguments, this);
	}
	return a + b + c;
}

const res = add(1, 2, 3, 4);

console.log("TESTIS add", res);
