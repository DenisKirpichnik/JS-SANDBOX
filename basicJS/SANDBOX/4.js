let a = 1;

function foo() {
	if (!a) {
		var a = 10;
	}
	console.log("1", a);
}

function bar() {
	a = 10;
	return;
	function a() {}
}

foo();
bar();
console.log("2", a);
