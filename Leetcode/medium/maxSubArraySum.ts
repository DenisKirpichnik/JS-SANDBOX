function max(x: number, y: number): number {
  return x > y ? x : y;
}

function maxSum(nums: number[], left: number, right: number) {
  if (right <= left) {
    return nums[left];
  }

  const mid = left + (right - left) / 2;

  console.log("mid", mid);

  let sum = 0;
  let leftMaxSum = -Infinity;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    if (sum > leftMaxSum) leftMaxSum = sum;
  }

  sum = 0;
  let rightMaxSum = -Infinity;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    if (sum > rightMaxSum) rightMaxSum = sum;
  }

  const maxLeftRight = max(
    maxSum(nums, left, mid) as number,
    maxSum(nums, mid + 1, right) as number
  );

  return max(maxLeftRight, leftMaxSum + rightMaxSum);
}

function main() {
  const arr = [2, -4, 1, 9, -6, 7, -3];
  const length = arr.length;

  return maxSum(arr, 0, length - 1);
}

console.log(main());
