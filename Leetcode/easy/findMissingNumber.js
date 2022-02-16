const findMissingNumber = (arr, n) => {
	const len = arr.length;
	const missed = [];

	for (let i = len - 1; i >= 0; i--) {
		const curr = arr[i];
		if (arr[i - 1] !== curr - 1) {
			missed;
		}
	}
};

console.log(findMissingNumber([1, 2, 3, 4]), 2); // 6;
