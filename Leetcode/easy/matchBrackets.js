function isValidParentheses(str) {
	let countOpen = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") countOpen++;
		else countOpen--;
		if (countOpen < 0) return false;
	}
	return !countOpen;
}

console.log(isValidParentheses("()()"));

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
			const keyForClosingBr = stack.pop(); // ([{
			if (bracket !== map[keyForClosingBr]) return false;
		}
	}
	return stack.length === 0;
}

console.log(matchBrackets("(){}[]["));
console.log(matchBrackets("()[{}]"));

const arr = ["()", ")("];
false;
const arr1 = ["()()", ")"];
false;
const arr2 = ["((())(())()))", "()", "()"];
true;

function func(val) {
	for (let i = 0; i < val.length; i++) {
		while (val[i].includes("()")) {
			val[i] = val[i].replaceAll("()", "");
		}
		if (val[i]) {
			return false;
		}
	}
	return true;
}

const f = (str) => {
	const stack = [];
	const map = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	for (let s of str) {
		if (map.hasOwnProperty(s)) {
			stack.push(s);
		} else {
			const closingBr = stack.pop();
			if (s !== map[closingBr]) return false;
		}
	}
	return stack.length === 0;
};

console.log(f("()()()"));
