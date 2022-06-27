var firstMissingPositive = function (nums) {
  let seen = [];
  let max = Math.pow(2, 31) - 1;
  let smallestMissingInt = 1;

  nums.forEach((num, i) => {
    if (Number.isInteger(num) && num > 0 && num <= max) {
      seen[num] = -1;
    }
  });
  for (let i = 1; i < seen.length; i++) {
    if (seen[i] != -1) {
      smallestMissingInt = i;
      break;
    }
    smallestMissingInt = i + 1 <= max ? i + 1 : false;
  }
  return smallestMissingInt;
};
