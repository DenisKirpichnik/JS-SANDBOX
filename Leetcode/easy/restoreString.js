String.prototype.replaceAt = function (index, replacement) {
	return (
		this.substring(0, index) +
		replacement +
		this.substring(index + replacement.length)
	);
};

var restoreString = function (s, indices) {
	let res = s;
	for (let i = 0; i < indices.length; i++) {
		res = res.replaceAt(indices[i], s[i]);
	}
	return res;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
