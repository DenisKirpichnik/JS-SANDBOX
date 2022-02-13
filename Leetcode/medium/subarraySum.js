function subArraySum(nums, k) {
	let count = 0,
		sum = 0;
	const map = new Map();
	map.set(0, 1);
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if (map.has(sum - k)) {
			console.log(map);
			count += map.get(sum - k);
		}

		map.set(sum, (map.get(sum) || 0) + 1);
	}
	return count;
}

console.log(subArraySum([1, 2, 3], 3));
