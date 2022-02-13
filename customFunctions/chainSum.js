// console.log("1");

// setTimeout(function () {
// 	console.log("2");
// }, 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

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

	return typeof firstNum === "undefined" ? 0 : add;
}

console.log(chainSum(1)(2)());
