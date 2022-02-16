const permuteString = (str) => {
	if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

	return str
		.split("")
		.reduce(
			(acc, letter, i) =>
				acc.concat(
					permuteString(str.slice(0, i) + str.slice(i + 1)).map(
						(val) => letter + val
					)
				),
			[]
		);
};

var checkInclusion = function (s1, s2) {
	const arr = permuteString(s1);
	let res = false;
	arr.forEach((el) => {
		if (s2.includes(el)) {
			res = true;
		}
	});

	return res;
};

console.log(checkInclusion("ab", "eidbaooo"));
