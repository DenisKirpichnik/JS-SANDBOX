// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
	console.log(str);
	left = 0;
	right = str.length - 1;
	while (left <= right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}

console.log(isPalindrome("a_ba"));

var isPalindrome1 = function (s) {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	const length = str.length - 1;

	for (let i = 0; i < length + 1; i++) {
		const el = str[i];
		if (el !== str[length - i]) {
			console.log(el);
			console.log(str[length - i]);
			return false;
		}
	}
	return true;
};

console.log(isPalindrome1("A man, a plan, a canal: Panama"));
