var canBeIncreasing = function (nums) {
	let removed = false;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] <= nums[i - 1]) {
			// current less than previous?
			if (removed) {
				return false;
			} else removed = true;

			if (i > 1 && nums[i] <= nums[i - 2]) {
				console.log(i);
				console.log(nums[i]);
				nums[i] = nums[i - 1];
				console.log(nums);
			}
		}
	}

	return true;
};

// console.log(canBeIncreasing([1, 2, 10, 5, 7]));

console.log(canBeIncreasing([2, 3, 1, 2]));

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.
