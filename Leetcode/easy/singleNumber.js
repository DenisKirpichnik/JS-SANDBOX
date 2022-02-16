var singleNumber = function (nums) {
	const uniqNums = new Set();
	let uniqSum = 0;
	let numSum = 0;

	for (let i = 0; i < nums.length; i++) {
		const el = nums[i];

		if (!uniqNums.has(el)) {
			uniqNums.add(el);
			uniqSum += el;
		}
		numSum += el;
	}
	return uniqSum * 2 - numSum;
};

var singleNumber1 = function (nums) {
	const uniqNums = Array.from(new Set(nums));

	let reduceSum = (acc, el) => acc + el;
	let uniqSum = uniqNums.reduce(reduceSum);
	let numSum = nums.reduce(reduceSum);

	return uniqSum * 2 - numSum;
};

// Input: nums = [4,1,2,1,2]
// Output: 4

console.log(singleNumber1([4, 1, 2, 1, 2])); //4
