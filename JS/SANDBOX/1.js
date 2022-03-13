// let text = 1;
// let obj = {
// 	text: 2,
// 	prop: {
// 		text: 3,
// 		getText: function () {
// 			return this.text;
// 		},
// 	},
// };

// let printText = obj.prop.getText;

// let res = printText();

// console.log("printText", res);

let foo = {
	prop: "xyz",
};

let bar = Object.create(foo);

delete bar.prop;

console.log(foo.prop);
// console.log(bar.hasOwnProperty("prop"));
