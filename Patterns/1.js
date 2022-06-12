// function sayHi() {
// 	console.log(name);
// 	console.log(age);
// 	var name = "Alice";
// 	let age = 18;
// }

// sayHi();

var text = 1;
let obj = {
	text: 2,
	prop: {
		text: 3,
		getText: function () {
			return this.text;
		},
	},
};

let printText = obj.prop.getText; // this loses context, use bind, points to window
console.log("1", printText());
console.log("2", obj.prop.getText());
