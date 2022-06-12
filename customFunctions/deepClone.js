function copy(aObject) {
	// Prevent undefined objects
	// if (!aObject) return aObject;

	let bObject = Array.isArray(aObject) ? [] : {};

	let value;
	for (const key in aObject) {
		value = aObject[key];

		bObject[key] = typeof value === "object" ? copy(value) : value;
	}

	return bObject;
}

// const obj2 = copy({ a: 1, b: { c: 3 } });
//////////
var a = [
	{
		name: "6x45",
		draw: {
			cost: 50,
			multiDraws: [1, 2, 3],
		},
		count: null,
	},
	{
		1: "7x49",
		draw: {
			cost: 75,
			multiDraws: [4, 5, 6],
		},
		count: undefined,
	},
];

function deepClone(obj) {
	if (obj === null) return null;
	if (typeof obj !== "object") return obj;

	let res = Array.isArray(obj) ? [] : {};

	let value;

	for (const key in obj) {
		value = obj[key];

		res[key] = typeof value === "object" ? deepClone(value) : value; // deepClone(value);
		//res[key] = deepClone(value);
	}

	return res;
}

console.log(deepClone(a));
