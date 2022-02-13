var climbStairs = function (n) {
	if (n === 1 || n === 0) return 1; // our base cases

	let first = 1;
	let second = 2;

	for (let i = 3; i <= n; i++) {
		let third = first + second;
		first = second;
		second = third;
	}
	return second;
};

console.log(climbStairs(3));
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
