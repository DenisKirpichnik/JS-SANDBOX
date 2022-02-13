const romanToint = (n) => {
	const map = { I: 1, V: 5, X: 10, L: 50, D: 500, C: 100, M: 1000 };
	let res = 0;
	for (let i = 0; i < n.length; i++) {
		const num = n[i];
		if (map[num] < map[n[i + 1]]) {
			res -= map[num];
		} else {
			res += map[num];
		}
	}

	return res;
};

console.log(romanToint("IV"));
