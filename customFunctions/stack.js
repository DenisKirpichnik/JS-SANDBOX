// Flat array with stack

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
