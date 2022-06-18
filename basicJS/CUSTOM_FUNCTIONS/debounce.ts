// const debounce = (fn, del) => {
// 	let timeoutID;

// 	return function (...args) {
// 		if (timeoutID) {
// 			clearTimeout(timeoutID);
// 		}
// 		setTimeout(() => {
// 			fn(...args);
// 		}, del);
// 	};
// };

// type Debounce = {
// 	fn: () => void;
// 	ms: number;
// };

// const debounce1 = (fn: () => void, ms: number) => {
// 	let timeoutID: number;

// 	return function () {
// 		const funccall = () => fn.apply(this, arguments);

// 		clearTimeout(timeoutID);

// 		timeoutID = setTimeout(funccall, ms);
// 	};
// };

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// 	// ...
// }

// // bad
// const throttle1 = (func, limit) => {
// 	let inThrottle;
// 	return function () {
// 		const args = arguments;
// 		const context = this;
// 		if (!inThrottle) {
// 			func.apply(context, args);
// 			inThrottle = true;
// 			setTimeout(() => (inThrottle = false), limit);
// 		}
// 	};
// };

// const throttle = (func, limit) => {
// 	let lastFunc;
// 	let lastRan;
// 	return function () {
// 		const context = this;
// 		const args = arguments;
// 		if (!lastRan) {
// 			func.apply(context, args);
// 			lastRan = Date.now();
// 		} else {
// 			clearTimeout(lastFunc);
// 			lastFunc = setTimeout(function () {
// 				if (Date.now() - lastRan >= limit) {
// 					func.apply(context, args);
// 					lastRan = Date.now();
// 				}
// 			}, limit - (Date.now() - lastRan));
// 		}
// 	};
// };

// const arr25 = [10, 12, 15, 21];
// for (const [i, item] of arr.entries()) {
// 	setTimeout(function () {
// 		console.log(`Index: ${i}, element: ${item}`);
// 	});
// }

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// function findTargetSum(array, targetSum) {
// 	const map = new Map();
// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		const second = targetSum - el;
// 		console.log(map);
// 		if (map.has(el)) {
// 			return [el, second];
// 		} else {
// 			map.set(second, el);
// 		}
// 	}

// 	// for (const [key, value] of map) {
// 	// 	console.log(key + " = " + value);
// 	// }
// }

// console.log(findTargetSum([3, 11, -1, 0], 10));

const debounce1 = (fn, ms) => {
	let timeoutID;

	return function () {
		const funccall = () => fn.apply(this, arguments);

		clearTimeout(timeoutID);

		timeoutID = setTimeout(funccall, ms);
	};
};

console.log(debounce1(() => "wow", 3000));
