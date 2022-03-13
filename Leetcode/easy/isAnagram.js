function isAnagram(s, t) {
	var lenA = s.length;
	var lenB = t.length;
	var map = {};

	if (lenA !== lenB) return false;

	for (var i = 0; i < lenA; i++) {
		if (!map[s[i]]) map[s[i]] = 0;
		console.log(map);
		map[s[i]]++;
	}

	for (var j = 0; j < lenB; j++) {
		if (!map[t[j]]) return false;
		map[t[j]]--;
	}

	return true;
}

console.log(isAnagram("aba", "baa"));

function createMap(str) {
	const map = {};
	// const formattedStr = str.toLowerCase().replace(/[^\w]/g, "");
	for (let char of str) {
		map[char] = map[char] + 1 || 1;
	}
	return map;
}

function isAnagram2(s, t) {
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

function isAnagram2(s, t) {
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

// THE BEST SOLUTION
const isAnagram3 = (a, b) => {
	const l1 = a.length;
	const l2 = b.length;
	if (l1 !== l2) return false;

	const map = {};

	for (let i = 0; i < a.length; i++) {
		if (!map[a[i]]) map[a[i]] = 0;
		map[a[i]]++;
	}

	for (let i = 0; i < b.length; i++) {
		if (!map[b[i]]) return false;
		map[b[i]]--;
	}
	return true;
};

console.log(isAnagram3("ab", "ba"));

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
