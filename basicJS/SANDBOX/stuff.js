// function addition(x, y) {
// 	return x + y;
// }
// const plus5 = addition.bind(null, 5);
// console.log(plus5(10)); // output -> 15

function partialAdd(a, b) {
	return a * b;
}

const pluse10 = partialAdd.bind(null, 10);
console.log(pluse10(10));

// Currying
const compose = (...fns) =>
	fns.reduce(
		(f, g) =>
			(...args) =>
				f(g(...args))
	);

const flattenObj = (obj) => {
	const flattened = {};

	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === "object") {
			Object.assign(flattened, flattenObj(obj[key]));
		} else {
			flattened[key] = obj[key];
		}
	});
	return flattened;
};

const object = { a: { b: 6, a: { b: 6, c: 8, d: { h: 6 } } } };

console.log("wow", flattenObj(object));

// Stack

const reverseString = (str) => {
	const stack = [];
	for (const letter of str) {
		stack.push(letter);
	}
	let reversedString;
	while (stack.length > 0) {
		reversedString += stack.pop();
	}
	return reversedString;
};

console.log(reverseString("abaklov"));
