function shiftedDiff(first, second) {
	if (first.length != second.length) return -1;
	return (second + second).indexOf(first);
}

const sum = (a) => (b) => b ? sum(a + b) : a;

const sum1 = (a) => {
	return function (b) {
		if (b) {
			return sum(a + b);
		}
		return a;
	};
};

console.log(sum1(1)(1)(1)());

function chainSum(firstNum) {
	let result = [firstNum];

	function add(anotherNum) {
		if (anotherNum === undefined) {
			result = result.reduce((acc, num) => acc + num, 0);
		} else if (anotherNum === undefined) {
			result = NaN;
		} else {
			result.push(anotherNum);
		}
		return typeof anotherNum === "undefined" ? result : add;
	}

	return typeof firstNum === "undefined" ? 0 : add;
}

console.log(chainSum(1)(1)(1)());

// const sum = (a) => {

// 	return function (b) {
// 		if (b) {
// 			return sum(a + b);
// 		}
// 		return a;
// 	};
// };
