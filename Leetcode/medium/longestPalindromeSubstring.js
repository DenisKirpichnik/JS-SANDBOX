// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// const getAllSubstrings = (str) => {
//   let i, j;

//   const set = new Set();

//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length + 1; j++) {
//       set.add(str.slice(i, j));
//     }
//   }
//   return set;
// };

// HEAP's algorithm
// function* permute(a, n = a.length) {
//   if (n <= 1) yield a.slice();
//   else
//     for (let i = 0; i < n; i++) {
//       yield* permute(a, n - 1);
//       const j = n % 2 ? 0 : i;
//       [a[n - 1], a[j]] = [a[j], a[n - 1]];
//     }
// }

// var longestPalindrome = (s) => {
//   if (s.length < 1 || s.length == null) return "";

//   var maxPallindrome = "";
//   for (var i = 0; i < s.length; i++) {
//     var oddPalindrome = checkPalindrome(s, i, i);
//     //in odd pallindrom the left and right center should be same
//     var evenPalindrome = checkPalindrome(s, i - 1, i);
//     //in even palindrom the left and right+1 should be center
//     //example a b b a [so left will be from b and right will from second b]
//     if (oddPalindrome.length > maxPallindrome.length) {
//       maxPallindrome = oddPalindrome;
//     }
//     if (evenPalindrome.length > maxPallindrome.length) {
//       maxPallindrome = evenPalindrome;
//     }
//   }
//   return maxPallindrome;
// };

// var checkPalindrome = (str, left, right) => {
//   while (left >= 0 && right < str.length) {
//     if (str[left] !== str[right]) break;
//     //string from left and right if doesn't matches then its not a palindrom hence break;
//     right++;
//     left--;
//   }
//   //we are taking the left and right from the center
//   //so we are moving the left to more left (left--)
//   //and moving the right to more right (right++)
//   return str.substring(left + 1, right);
// };

// console.log(longestPalindrome("cbbd"));

var longestPalindrome = (s) => {
  if (s.length < 1 || s.length == null) return "";

  var maxPallindrome = "";
  for (var i = 0; i < s.length; i++) {
    var oddPalindrome = checkPalindrome(s, i, i);
    //in odd pallindrom the left and right center should be same
    var evenPalindrome = checkPalindrome(s, i - 1, i);
    //in even palindrom the left and right+1 should be center
    //example a b b a [so left will be from b and right will from second b]
    if (oddPalindrome.length > maxPallindrome.length) {
      maxPallindrome = oddPalindrome;
    }
    if (evenPalindrome.length > maxPallindrome.length) {
      maxPallindrome = evenPalindrome;
    }
  }
  return maxPallindrome;
};

var checkPalindrome = (str, left, right) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;
    //string from left and right if doesn't matches then its not a palindrom hence break;
    right++;
    left--;
  }
  //we are taking the left and right from the center
  //so we are moving the left to more left (left--)
  //and moving the right to more right (right++)
  return str.substring(left + 1, right);
};

console.log(longestPalindrome("abba"));
