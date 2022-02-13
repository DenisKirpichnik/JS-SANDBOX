var lengthOfLastWord = function (str) {
	let length = 0;

	let trailingSpace = false;

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === " " && !trailingSpace) {
			console.log("white space detected");
			trailingSpace = true;
		}
		if (str[i] !== " ") {
			console.log(str[i]);
			trailingSpace = false;
			length++;
		}

		if (str[i - 1] === " " && !trailingSpace) {
			console.log(str[i]);
			return length;
		}

		// console.log(`iteration #${i}, elem-${str[i]}`);
	}

	return length;
};

console.log(lengthOfLastWord("a"));
