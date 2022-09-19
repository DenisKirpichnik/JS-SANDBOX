var firstUniqChar = function (s) {
  let cahce = {};
  let chars = s.split("");
  for (let char of chars) {
    if (char in cahce) cahce[char]++;
    else cahce[char] = 1;
  }
  for (let i = 0; i < chars.length; i++) {
    if (cahce[chars[i]] > 1) continue;
    return i;
  }

  return -1;
};

var firstUniqChar1 = function (s) {
  if (!s) return -1;
  if (s.length === 1) return 0;
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

firstUniqChar("Leetcode");
