//"aaabbc" => a = 3, b = 2, c = 1

const uniqeSymbolCount = (string) => {
	if (typeof string !== "string")
		throw new Error("argument should be a string");

	const map = {};
	for (let symbol of string) {
		if (map.hasOwnProperty(symbol)) {
			map[symbol] += 1;
		} else {
			map[symbol] = 1;
		}
	}

	return map;
};

console.log(uniqeSymbolCount(7));
