var mySqrt = function (number) {
	let start = 0;
	let end = number;
	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		if (mid * mid > number) end = mid - 1;
		else start = mid + 1;
	}

	return end;
};

console.log(mySqrt(4));
