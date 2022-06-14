const travel = (r, c, memo = {}) => {
	const key = r + "," + c;
	if (key in memo) return memo[key];
	if (r === 0 || c === 0) return 0;
	if (r === 1 && c === 1) return 1;
	memo[key] = travel(r - 1, c, memo) + travel(r, c - 1, memo);
	return memo[key];
};

// console.log(travel (10,10))

const canSum = (target, numbers, memo = {}) => {
	if (target in memo) {
		return memo[target];
	}
	if (target === 0) return true;
	if (target < 0) return false;

	for (let num of numbers) {
		const remainder = target - num;
		if (canSum(remainder, numbers, memo) === true) {
			memo[target] = true;
			return true;
		}
	}
	memo[target] = false;
	return false;
};

// console.log(canSum(25, [4,2]))

// RECURSIVE FIB
// TIME COMPLEXITY - O(2^n) (exponential time compl)
// SPACE COMPLEXITY - O(n)
const recFib1 = (n) => {
	if (n <= 2) return 1;
	return recFib1(n - 1) + recFib1(n - 2);
};

// RECURSIVE FIB  with MEMO
// TIME COMPLEXITY - O(2^n) (exponential time compl)
// SPACE COMPLEXITY - O(n)
const recFib = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = recFib(n - 1, memo) + recFib(n - 2, memo);
	return memo[n];
};

// console.log(recFib(50))

// TABULATION FIB
// TIME COMPLEXITY - O(n)
// SPACE COMPLEXITY - O(n)
const fibTabulation = (n) => {
	const res = Array(n + 1).fill(0);
	res[1] = 1;
	for (let i = 0; i <= n; i++) {
		res[i + 1] += res[i];
		res[i + 2] += res[i];
	}
	return res[n];
};

const jewels = (J, S) => {
	let res = 0;
	for (let i = 0; i < S.length; i++) {
		if (J.includes(S[i])) {
			++res;
		}
	}
	return res;
};

jewels("ab", "aabbccd");
