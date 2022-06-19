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

		res[key] = typeof value === "object" ? deepClone(value) : value;
	}

	return res;
}

// RECURSIVE
function deepCloneR(objA) {
	if (objA === null) return null;
	if (typeof objA !== "object") return objA;

	let objB = Array.isArray(objA) ? [] : {};

	let value;

	for (const key in objA) {
		value = objA[key];

		objB[key] = typeof value === "object" ? deepClone(value) : value;
	}

	return objB;
}

// ITERATIVE

const objA = {
	a: 3,
	b: 5,
	c: {
		wow: [1, 2, 3],
		cool: { cg: 35 },
		fuck: {
			yeah: {
				finsih: "123",
			},
		},
		add: () => 5,
	},
};

function deepCloneI(objA) {
	if (objA === null) return null;
	if (typeof objA !== "object") return objA;

	const objB = Array.isArray(objA) ? [] : {};

	for (let key in objA) {
		if (typeof property !== "object") {
			objB[key] = objA[key];
		}
	}
	return objB;
}

let copiedObj = deepCloneI(objA);

//// IS THIS OK?
// let user = {
//   name: "Alexander",
//   age: 26
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   if (user.hasOwnProperty(key)) {
//   clone[key] = user[key];
//  }
// }
