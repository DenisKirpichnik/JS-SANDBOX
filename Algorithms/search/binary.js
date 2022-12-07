const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return console.log("Target was found at index " + middleIndex);
    }

    if (target > array[middleIndex]) {
      console.log("Searching the right side of Array");
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log("Searching the left side of array");
      endIndex = middleIndex - 1;
    }
    // Not found in this iteration of the loop. Looping again.
    else {
      console.log("Not Found this loop iteration. Looping another iteration.");
    }
  }
  // If Target Is Not Found
  console.log("Target value not found in array");
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);

//short version
var search = function (nums, target) {
  let i = 0;
  j = nums.length - 1;
  while (i <= j) {
    const mid = parseInt((i + j) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) j = mid - 1;
    else i = mid + 1;
  }
  return -1;
};
