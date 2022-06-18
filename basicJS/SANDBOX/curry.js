// const sum = (a) => {

// 	return function (b) {
// 		if (b) {
// 			return sum(a + b);
// 		}
// 		return a;
// 	};
// };

//

const sum1 = (a) => (b) => b ? sum1(a + b) : a;
console.log(sum1(1)(2)(3)(4)());
