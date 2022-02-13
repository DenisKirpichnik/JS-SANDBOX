const removeElement = (nums, val) => {
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[j++] = nums[i];
			console.log(j);
		}
	}

	//nums.length = j; // Chop the surplus values - not needed for LC submission
	return j;
};

removeElement([1, 2, 2, 3], 2);

var removeElement1 = function (nums, val) {
	var len = nums.length;
	var count = 0;
	for (var i = 0; i < len; i++) {
		if (nums[i] !== val) nums[count++] = nums[i];
	}
	return count;
};

removeElement1([1, 2, 2, 3], 2);
