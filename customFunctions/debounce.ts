// const debounce = (fn, del) => {
// 	let timeoutID;

// 	return function (...args) {
// 		if (timeoutID) {
// 			clearTimeout(timeoutID);
// 		}
// 		setTimeout(() => {
// 			fn(...args);
// 		}, del);
// 	};
// };

// type Debounce = {
// 	fn: () => void;
// 	ms: number;
// };

// const debounce1 = (fn: () => void, ms: number) => {
// 	let timeoutID: number;

// 	return function () {
// 		const funccall = () => fn.apply(this, arguments);

// 		clearTimeout(timeoutID);

// 		timeoutID = setTimeout(funccall, ms);
// 	};
// };

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// 	// ...
// }

// // bad
// const throttle1 = (func, limit) => {
// 	let inThrottle;
// 	return function () {
// 		const args = arguments;
// 		const context = this;
// 		if (!inThrottle) {
// 			func.apply(context, args);
// 			inThrottle = true;
// 			setTimeout(() => (inThrottle = false), limit);
// 		}
// 	};
// };

// const throttle = (func, limit) => {
// 	let lastFunc;
// 	let lastRan;
// 	return function () {
// 		const context = this;
// 		const args = arguments;
// 		if (!lastRan) {
// 			func.apply(context, args);
// 			lastRan = Date.now();
// 		} else {
// 			clearTimeout(lastFunc);
// 			lastFunc = setTimeout(function () {
// 				if (Date.now() - lastRan >= limit) {
// 					func.apply(context, args);
// 					lastRan = Date.now();
// 				}
// 			}, limit - (Date.now() - lastRan));
// 		}
// 	};
// };

// const arr25 = [10, 12, 15, 21];
// for (const [i, item] of arr.entries()) {
// 	setTimeout(function () {
// 		console.log(`Index: ${i}, element: ${item}`);
// 	});
// }

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// function findTargetSum(array, targetSum) {
// 	const map = new Map();
// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		const second = targetSum - el;
// 		console.log(map);
// 		if (map.has(el)) {
// 			return [el, second];
// 		} else {
// 			map.set(second, el);
// 		}
// 	}

// 	// for (const [key, value] of map) {
// 	// 	console.log(key + " = " + value);
// 	// }
// }

// console.log(findTargetSum([3, 11, -1, 0], 10));

function createMap(str) {
	const map = {};
	// const formattedStr = str.toLowerCase().replace(/[^\w]/g, "");
	for (let char of str) {
		map[char] = map[char] + 1 || 1;
	}
	return map;
}

function isAnagram(s, t) {
	// if (str1.length !== str2.length) {
	// 	return false;
	// }
	const firstMap = createMap(s);
	const secondMap = createMap(t);

	if (Object.keys(firstMap).length !== Object.keys(secondMap).length) {
		return false;
	}
	for (let char in firstMap) {
		if (firstMap[char] !== secondMap[char]) return false;
	}
	return true;
}

console.log(isAnagram("aba!?", "baa"));
console.log(isAnagram("friEnd", "Finder"));

var isAnagram1 = function (s, t) {
	const str1 = s.toLowerCase();
	const str2 = t.toLowerCase();
	var lenA = s.length;
	var lenB = t.length;
	var map = {};

	for (let i = 0; i < lenA; i++) {
		if (!map[str1[i]]) map[str1[i]] = 0;
		map[s[i]]++;
	}

	for (let j = 0; i < lenB; j++) {
		if (!map[str2[j]]) return false;
		map[s[j]]--;
	}

	return true;
};

console.log(isAnagram1("aba", "baa"));
console.log(isAnagram1("friEnd", "Finder"));

function isAnagram3(s, t) {
	const ans = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		ans[s.charCodeAt(i) - 97]++;
	}

	for (let i = 0; i < t.length; i++) {
		ans[t.charCodeAt(i) - 97]--;
	}

	for (let i = 0; i < 26; i++) {
		if (ans[i] !== 0) return false;
	}

	return true;
}

console.log(isAnagram3("aba", "baa"));
