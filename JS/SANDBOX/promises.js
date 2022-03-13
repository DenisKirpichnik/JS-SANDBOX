// console.log(!!"false" == !!"true");

// const obj = { a: 2 };
// const obj1 = { a: 2 };

// console.log(obj === obj1);

// var mostWordsFound = function (sentences) {
// 	return Math.max(...sentences.map((s) => s.split(" ").length));
// };

// console.log(
// 	mostWordsFound([
// 		"alice and bob love leetcode",
// 		"i think so too",
// 		"this is great thanks very much",
// 	])
// );

const builtForPath = (val) =>
	val.split(".").reduceRight((acc, next) => ({ [next]: acc }), {});

console.log(builtForPath("a.b.c.d")); // {a : {b: {c: {d:}}}}
