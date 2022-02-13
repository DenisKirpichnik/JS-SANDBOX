let findPermutations = (str) => {
	if (typeof str !== "string") {
		throw new Error("shit");
	} else if (str.length < 2) {
		return [str];
	}

	const res = [];

	for (let i = 0; i < str.length; i++) {
		const el = str[i];
		const remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

		for (let permutation of findPermutations(remainingChars)) {
			res.push(el + permutation);
		}
	}
	return res;
};

console.log(findPermutations("abc"));
