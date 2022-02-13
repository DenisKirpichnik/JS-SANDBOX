// var searchInsert = function (array, target) {
// 	let startIndex = 0;
// 	let endIndex = array.length - 1;

// 	while (startIndex <= endIndex) {
// 		let middleIndex = Math.floor((startIndex + endIndex) / 2);
// 		console.log(middleIndex);
// 		if (target === array[middleIndex]) {
// 			return middleIndex;
// 			console.log("Target was found at index " + middleIndex);
// 		}

// 		if (target > array[middleIndex]) {
// 			startIndex = middleIndex + 1;
// 			console.log("Searching the right side of Array");
// 		}
// 		if (target < array[middleIndex]) {
// 			endIndex = middleIndex - 1;
// 			console.log("Searching the left side of Array");
// 		}
// 	}
// 	return startIndex;
// };

var searchInsert = function (nums, target) {
	let left = 0,
		right = nums.length;
	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
};

// Input: nums = [1,3,5,6], target = 5
// Output: 2

console.log(searchInsert([1, 2, 5, 6], 3));

// let startIndex = 0;
// 	let endIndex = array.length - 1;

// 	while (startIndex <= endIndex) {
// 		let middleIndex = Math.floor((startIndex + endIndex) / 2);

// 		if (target === array[middleIndex]) {
// 			return console.log("Target was found at index " + middleIndex);
// 		}

// 		if (target > array[middleIndex]) {
// 			console.log("Searching the right side of Array");
// 			startIndex = middleIndex + 1;
// 		}
// 		if (target < array[middleIndex]) {
// 			console.log("Searching the left side of array");
// 			endIndex = middleIndex - 1;
// 		}
// 		// Not found in this iteration of the loop. Looping again.
// 		else {
// 			console.log("Not Found this loop iteration. Looping another iteration.");
// 		}
// 	}
// 	// If Target Is Not Found
// 	console.log("Target value not found in array");
