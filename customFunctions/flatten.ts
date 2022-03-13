 // FLatten for arrays

function flatten<T>(items: T[]) {
	const flat: T[] = [];

	items.forEach((item) => {
		Array.isArray(item) ? flat.push(...flatten(item)) : flat.push(item);
	});
	return flat;
}
const arr2 = [1, [2, 3], [4, [5, 6]]];

function flatten1<Q>(arr: Q[]) {
	return arr.reduce((acc: Q[], curr: Q) => {
		return Array.isArray(curr) ? [...acc, ...flatten(curr)] : [...acc, curr];
	}, []);
}

//console.log(flatten1(arr2));

// Flatten nested object

const flattenObj = (obj: { [key: string]: any }) => {
	const flattened: { [key: string]: any } = {};

	Object.keys(obj).forEach((key: string | number) => {
		if (typeof obj[key] === "object") {
			Object.assign(flattened, flattenObj(obj[key]));
		} else {
			flattened[key] = obj[key];
		}
	});
	return flattened;
};

const object = { a: { b: 6, a: { b: 6, c: 8, d: { h: 6 } } } };

console.log(flattenObj(object));

function flattenS<T>(arr: T[]) {
	const res = [arr];

	let i = 0;
	while (i < res.length) {
		if (Array.isArray(res[i])) {
			res.splice(i, 1, ...(res[i] as any));
		} else {
			i++;
		}
	}
	return res;
}

console.log(flattenS([1, [2, 3], [4, [5, 6]]]));

// const res = arr.slice();
//   let i = 0;

//   while (i < res.length) {
//     if (Array.isArray(res[i])) {
//       res.splice(i, 1, ...res[i]);
//     }
//     else {
//       i++;
//     }
//   }

//   return res;
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
