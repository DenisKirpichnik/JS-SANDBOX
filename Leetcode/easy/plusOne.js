// function doesOverflow(num, overflows) {}

var plusOne = function (arr) {
	const lastEl = arr[arr.length - 1];
	const res = [lastEl];
	let overflows = false;

	if (res[0] === 9) {
		overflows = true;
		res[0] = 0;
		if (arr.length === 1) {
			return [1, 0];
		}
	} else {
		return arr.map((el, i) => (i === arr.length - 1 ? el + 1 : el));
	}

	for (let i = arr.length - 2; i >= 0; i--) {
		const el = arr[i];

		if (overflows) {
			if (i !== 0) {
				el === 9
					? (res.unshift(0), (overflows = true))
					: (res.unshift(el + 1), (overflows = false));
			}
		} else if (!overflows && i !== 0) {
			res.unshift(el);
		}
		if (i === 0) {
			if (overflows) {
				console.log("reached start");
				el === 9 ? res.unshift(1, 0) : res.unshift(el + 1);
			} else {
				res.unshift(el);
			}
		}
	}
	return res;
};

var plusOne1 = function (digits) {
	for (var i = digits.length - 1; i >= 0; i--) {
		if (++digits[i] > 9) {
			digits[i] = 0;
			console.log(digits);
		} else {
			console.log("fired", digits);
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};

var plusOne2 = function (digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i]++;

		if (digits[i] > 9) {
			digits[i] = 0;
		} else {
			return digits;
		}
	}

	digits.unshift(1);
	return digits;
};

console.log(plusOne2([2, 3, 9]));

// [2,4,9,3,9]
// Output
// [2,4,0]
// Expected
// [2,4,9,4,0]
