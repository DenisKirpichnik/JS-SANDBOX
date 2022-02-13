function mergerIntervals(intervals) {
	if (intervals.length < 2) {
		return intervals;
	}

	intervals.sort((a, b) => a[0] - b[0]);

	const result = [intervals[0]];

	for (let interval of intervals) {
		const last = result[result.length - 1];
		if (last[1] >= interval[0]) {
			last[1] = Math.max(last[1], interval[1]);
		} else {
			result.push(interval);
		}
	}
	return result;
}

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

console.log(
	mergerIntervals([
		[9, 10],
		[15, 17],
		[14, 16],
	])
);

const generateInt = (interv) => {
	const res = [];
	for (let int of interv) {
		for (let i = int[0]; i <= int[1]; i++) {
			res.push(i);
		}
	}
	console.log(res);
	return res;
};

const workersPresent = (intervals) => {
	const workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

	intervals = intervals.sort((a, b) => a[0] - b[0]);
	console.log(intervals);
	const mrgInt = [intervals[0]];

	for (let interval of intervals) {
		const last = mrgInt[mrgInt.length - 1];
		if (last[1] >= interval[0]) {
			last[1] = Math.max(interval[1], last[1]);
		} else {
			mrgInt.push(interval);
		}
	}
	const absentHours = generateInt(mrgInt);
	const allPresent = workingHours.filter(
		(el) => absentHours.indexOf(el) === -1
	);
	return allPresent;
};

console.log(
	workersPresent([
		[9, 10],
		[15, 17],
		[14, 16],
	])
);
