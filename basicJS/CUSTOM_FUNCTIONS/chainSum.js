// CurriedSum
const sum0 = (a) => (b) => b ? sum(a + b) : a;

const sum1 = (a) => {
	return function (b) {
		if (b) {
			return sum1(a + b);
		}
		return a;
	};
};

// My own implementation
function chainSum(firstNum) {
	let result = [firstNum];

	function add(anotherNum) {
		if (anotherNum === undefined) {
			result = result.reduce((acc, num) => acc + num, 0);
		} else {
			result.push(anotherNum);
		}
		return typeof anotherNum === "undefined" ? result : add;
	}

	return add;
}

console.log(chainSum(1)(2)());

/// variadic number of arguments, no undefined
function sum(n) {
	var v = function (x) {
		return sum(n + x);
	};

	v.valueOf = v.toString = function () {
		return n;
	};

	return v;
}

console.log(+sum(1)(2)(3)(4));
