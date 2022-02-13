const bubbleSort = (arr) => {
	const length = arr.length;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tempor = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tempor;
			}
		}
	}
	return arr;
};

console.log(bubbleSort([2, 3, 5, 6, 7, 8]));
