const input1 = [1, 2, 2, 1];
const input2 = [2, 2];
// [2,2]

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];
// [4,9]

const intersect = (arr1, arr2) => {
	const res = [];

	let map = arr1.reduce((acc, el) => {
		acc[el] = acc[el] ? acc[el] + 1 : 1;
		return acc;
	}, {});

	for (let i = 0; i < arr2.length; i++) {
		const curr = arr2[i];

		if (map[curr]) {
			map[curr]--;
		}
		if (map[curr] === 0) {
			res.push(curr);
			map[curr] = null;
		}
	}

	return res;
};

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));

function isAnagram(a, b) {
	const length1 = a.length;
	const length2 = b.length;

	if (length1 !== length2) return false;

	const map = {};

	for (let i = 0; i < length1; i++) {
		if (!map[a[i]]) map[a[i]] = 0;
		map[a[i]]++;
	}

	for (let j = 0; j < length2; j++) {
		if (!map[b[j]]) return false;
		map[b[j]]--;
	}

	return true;
}

console.log(isAnagram("aba", "baaa"));
