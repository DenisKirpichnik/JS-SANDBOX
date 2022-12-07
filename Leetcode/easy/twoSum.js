// function twoSum(arr, target) {
// 	const res = arr.reduce((acc, el, i) => {
// 		const secondNumber = target - el;

// 		const secondNumberIndex = arr.indexOf(secondNumber);

// 		if (secondNumberIndex >= 0 && i !== secondNumberIndex && acc.length < 2) {
// 			acc.push(i, secondNumberIndex);
// 		}

// 		return acc;
// 	}, []);

// 	return res;
// }

// var twoSum = function (nums, target) {
// 	const indices = new Map();

// 	for (let index = 0; index < nums.length; index++) {
// 		const complement = target - nums[index];

// 		if (indices.has(complement)) {
// 			return [indices.get(complement), index];
// 		}

// 		indices.set(nums[index], index);
// 	}

const twoSum = function (nums, target) {
  const indicesMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const second = target - nums[i];

    if (indicesMap.has(second)) {
      return [indicesMap.get(second), i];
    }

    indicesMap.set(nums[i], i);
  }
};

console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [0,1]
