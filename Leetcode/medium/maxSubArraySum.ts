/**
 * @param {number[]} arr
 * @return {number}
 */

function maxSubArraySum(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    res = Math.max(res, arr[i]);
  }
  return res;
}

//console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
};

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

var maxSubArrayD = function (nums) {
  //create an array to store the continous max sum
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    //store the max of current number, previous+current number in the array
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  //return the max element among the dp elements
  console.log("TESTIS dp", dp);
  return Math.max(...dp);
};

//console.log(maxSubArrayD([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

const test = (nums) => {
  let currSum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currSum = currSum + nums[i];
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) currSum = 0;
  }

  return maxSum;
};

/// DIVIDE AND CONQUER APPROACH

const maxNumber = (a: number, b: number): number => {
  return a > b ? a : b;
};

const maxOutOfThree = (a: number, b: number, c: number): number => {
  return Math.max(Math.max(a, b), c);
};

const maxCrossingSum = (arr: number[],low:number, mid:number, high: number )
