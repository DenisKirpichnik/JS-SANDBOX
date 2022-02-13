function matchBrackets(s) {
	const stack = [];

	const map = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	for (let bracket of s) {
		if (map.hasOwnProperty(bracket)) {
			stack.push(bracket);
		} else {
			const closingBr = stack.pop();
			if (bracket !== map[closingBr]) return false;
		}
	}
	return stack.length === 0;
}

console.log(matchBrackets("(){}[]["));
console.log(matchBrackets("()[{}]"));
