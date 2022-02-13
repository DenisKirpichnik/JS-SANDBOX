const mergeArrays = (nums1, m, nums2, n) => {
	var i = m - 1;
	var j = n - 1;
	var k = m + n - 1;
	while (j >= 0) {
		nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
	}
	return nums1;
};

console.log(mergeArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// nums1 = nums1.slice(0, m).concat(nums2.slice(0, n));
// return nums1.sort((a, b) => a - b);
