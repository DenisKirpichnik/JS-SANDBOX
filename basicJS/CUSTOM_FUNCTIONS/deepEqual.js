const obj1 = { a: { b: 2, c: 3 }, d: 4 };
const obj2 = { a: { b: 2, c: 3 }, d: 4 };

///// VERSION 1.0
const deepEquals = (x, y, exceptionName) => {
	if (x === y) {
		return true; // if both x and y are null or undefined and exactly the same
	} else if (!(x instanceof Object) || !(y instanceof Object)) {
		return false; // if they are not strictly equal, they both need to be Objects
	} else if (x.constructor !== y.constructor) {
		// they must have the exact same prototype chain, the closest we can do is
		// test their constructor.
		return false;
	} else {
		for (const p in x) {
			if (!x.hasOwnProperty(p)) {
				continue; // other properties were tested using x.constructor === y.constructor
			}
			if (!y.hasOwnProperty(p)) {
				return false; // allows to compare x[ p ] and y[ p ] when set to undefined
			}
			if (x[p] === y[p] || (!!exceptionName && p === exceptionName)) {
				continue; // if they have the same strict value or identity then they are equal
			}
			if (typeof x[p] !== "object") {
				return false; // Numbers, Strings, Functions, Booleans must be strictly equal
			}
			if (!deepEquals(x[p], y[p])) {
				return false;
			}
		}

		for (const p in y) {
			if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
				return false;
			}
		}

		return true;
	}
};
console.log(obj1.constructor === obj2.constructor);
console.log(deepEquals(obj1, obj2));

/////// VERSION 2.0

const obj3 = {
	var: {
		wow: "cool",
		stuff: [123, 222],
	},
	cool: null,
	fine: "foe",
};

const obj4 = {
	var: {
		wow: "cool",
		stuff: [123],
	},
	cool: null,
	fine: "foe",
};

const deepEquals1 = (valueOne, valueTwo) => {
	if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
		const isValueOneNaN = isNaN(valueOne) && typeof valueOne === "number";
		const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === "number";
		if (isValueOneNaN && isValueTwoNaN) return true;
		return valueOne === valueTwo;
	}

	if (typeof valueOne !== typeof valueTwo) return false;

	if (valueOne === null && valueTwo === null) return true;
	if (valueOne === null || valueTwo === null) return false;
	if (valueOne === valueTwo) return true;

	if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
		if (valueOne.length !== valueTwo.length) return false;
		for (let i = 0; i < valueOne.length; i++) {
			if (!deepEquals(valueOne[i], valueTwo[i])) return false;
		}
		return true;
	}

	if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return False;

	const valueOneKeys = Object.keys(valueOne);
	const valueTwoKeys = Object.keys(valueTwo);

	if (valueOneKeys.length !== valueTwoKeys.length) return false;
	if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

	for (let i = 0; i < valueOneKeys.length; i++) {
		const key = valueOneKeys[i];
		const valueOneValue = valueOne[key];
		const valueTwoValue = valueTwo[key];
		if (!deepEquals(valueOneValue, valueTwoValue)) return false;
	}

	return true;
};

console.log(deepEquals1(obj3, obj4));
