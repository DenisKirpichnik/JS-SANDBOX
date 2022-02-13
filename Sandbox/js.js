// const sortOddNumber = (arr) => {
// 	const oddIndices = [];

// 	const res = arr.reduce((acc, el, i) => {
// 		if (el % 2 !== 0) {
// 			oddIndices.push(i);
// 			acc.push(el);
// 		}

// 		return acc.sort((a, b) => a - b);
// 	}, []);

// 	for (let i = 0; i < oddIndices.length; i++) {
// 		arr.splice(oddIndices[i], 1, res[i]);
// 	}
// 	return arr;
// };

// console.log(sortOddNumber([5, 4, 2, 1, 6, 8, 9, 13, 11]));

// console.log(null == undefined);

// function maxSum(arr, n, k) {
// 	// Initialize result
// 	let max_sum = Number.MIN_VALUE;

// 	// Consider all blocks starting with i.
// 	for (let i = 0; i < n - k + 1; i++) {
// 		let current_sum = 0;
// 		for (let j = 0; j < k; j++) current_sum = current_sum + arr[i + j];

// 		// Update result if required.
// 		max_sum = Math.max(current_sum, max_sum);
// 	}

// 	return max_sum;
// }

// // Driver code
// let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
// let k = 4;
// let n = arr.length;

// console.log(maxSum(arr, n, k));

// function pigIt(str) {
// 	str.trim();

// 	const res = str.split(" ");
// 	const map = res.map((el) => {
// 		return /\w/g.test(el) ? el.substring(1) + el[0] + "ay" : el;
// 	});
// 	return map.join(" ");
// }

// console.log(pigIt("Pig latin is cool !!!")); //,'igPay atinlay siay oolcay')
// // +ay
////////////////////////////////////////////////////////////////////////////////////////////

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10

// function add(n) {
// 	let fn = function (x) {
// 		return add(n + x);
// 	};
// 	fn.valueOf = function () {
// 		return n;
// 	};
// 	return fn;
// }

// console.log(+add(1));
// // console.log(add(1)(2));
// console.log(add(1)(2)(3).valueOf());
// // console.log(add(1)(2)(3)(4));

// function add(x, y, z) {
// 	return x + y + z;
// }

// const yack = (...fns) =>
// 	fns.reduce(
// 		(f, g) =>
// 			(...args) =>
// 				f(g(...args))
// 	);

//6

// const yack = (fn, ...args) => {
// 	return args.length >= fn.length
// 		? fn(...args)
// 		: (...args2) => yack(fn, ...args, ...args2);
// };

// var curriedAdd = yack(add);
// console.log(curriedAdd(1)()()()(2)(3)); //6

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log("Index: " + i + ", element: " + arr[i]);
	}, 1000);
}

// for (var i = 0; i < 3; i++) {
// 	setTimeout(
// 		(function (i_local) {
// 			return function () {
// 				alert(i_local);
// 			};
// 		})(i),
// 		1000 + i
// 	);
// }

function createBase(baseNumber) {
	return function (N) {
		// we are referencing baseNumber here even though it was declared
		// outside of this function. Closures allow us to do this in JavaScript
		return baseNumber + N;
	};
}

var addSix = createBase(6);
addSix(10);
addSix(21);

function counter() {
	var _counter = 0;
	// return an object with several functions that allow you
	// to modify the private _counter variable
	return {
		add: function (increment) {
			_counter += increment;
		},
		retrieve: function () {
			return "The counter is currently at: " + _counter;
		},
	};
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve();

function debounce(fn, del) {
	let timeoutID;

	return function (...args) {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		setTimeout(() => {
			fn(...args);
		}, del);
	};
}

function debounce(fn, delay) {
	// maintain a timer
	let timer = null;
	// closure function that has access to timer
	return function () {
		// get the scope and parameters of the function
		// via 'this' and 'arguments'
		let context = this;
		let args = arguments;
		// if event is called, clear the timer and start over
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}

function newDebounce(fn, delay) {
	let timeoutID = null;
	return function () {
		let context = this;
		let args = arguments;
		if (timeoutID) clearTimeout(timer);
		timeoutID = setTimeout(() => fn.apply(context, args), delay);
	};
}
