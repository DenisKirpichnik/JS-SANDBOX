const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      start = mid - 1;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    }
  }

  return -1;
};

var searchRange = function (nums = [5, 7, 7, 8, 8, 10], target = 8) {
  const index = binarySearch(nums, target);
  let start = index;
  let end = index;

  while (nums[end] === target && nums[end + 1] === target) {
    end++;
  }
  while (nums[start] === target && nums[start - 1] === target) {
    start--;
  }
  return [start, end];
};

function b