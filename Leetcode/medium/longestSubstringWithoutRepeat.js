// var lengthOfLongestSubstring = function (s) {
// 	if (s.length === 0 || s.length === 1) {
// 		return s.length;
// 	}

// 	maxStr = "";
// 	s.split("").reduce((prev, curr) => {
// 		let nextStr;

// 		if (prev.indexOf(curr) === -1) {
// 			nextStr = prev + curr;
// 		} else {
// 			const newFirstInd = prev.indexOf(curr) + 1;
// 			const newStr = prev.substring(newFirstInd, prev.length);
// 			nextStr = newStr + curr;
// 		}

// 		maxStr = nextStr.length > maxStr.length ? nextStr : maxStr;
// 		return nextStr;
// 	});

// 	return maxStr.length;
// };

var lengthOfLongestSubstring = function (s) {
	const $window = new SlidingWindow(s);

	while ($window.canExpand())
		$window.shouldExpand() ? $window.expand() : $window.shrink();

	return $window.size;
};

class SlidingWindow {
	constructor(stringable = "") {
		this.string = stringable;
		this.view = new Set();
		this.right = 0;
		this.size = 0;
		this.left = 0;
	}

	canExpand() {
		return this.right < this.string.length;
	}

	shouldExpand() {
		return this.view.has(this.string.charAt(this.right)) === false;
	}

	expand() {
		this.size = Math.max(this.size, this.right - this.left + 1);
		this.view.add(this.string.charAt(this.right));
		this.right++;
	}

	shrink() {
		this.view.delete(this.string.charAt(this.left));
		this.left++;
	}
}

const lengthOfLongestSubstring1 = (s) => {
	let string = s;
	let view = new Set();
	let right = 0;
	let size = 0;
	let left = 0;

	function shouldExpand() {
		return view.has(string.charAt(right)) === false;
	}

	function expand() {
		size = Math.max(size, right - left + 1);
		view.add(string.charAt(right));
		right++;
	}

	function shrink() {
		view.delete(string.charAt(left));
		left++;
	}

	while (right < string.length) {
		shouldExpand() ? expand() : shrink();
	}

	return size;
};

console.log(lengthOfLongestSubstring1("abcabcbb")); //abc
console.log(lengthOfLongestSubstring1("bbbbb")); //b
console.log(lengthOfLongestSubstring1("au"));
console.log(lengthOfLongestSubstring1("pwwkew")); //wke
