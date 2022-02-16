var trap = function (arr) {
	const length = arr.length;
	let maxLeft = arr[0];
	let maxRight = arr[length - 1];

	let left = 1;
	let right = length - 2;
	let res = 0;
	while (left <= right) {
		if (maxLeft <= maxRight) {
			maxLeft = Math.max(maxLeft, arr[left]);
			res += maxLeft - arr[left];
			left++;
		} else {
			maxRight = Math.max(maxRight, arr[right]);
			res += maxRight - arr[right];
			right--;
		}
	}
	return res;
};

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
