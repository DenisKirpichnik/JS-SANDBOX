function foo() {
	var name = "Brian";

	//alert 'string'
	console.log(typeof name);

	//cast to boolean
	var bool = !!name;
	console.log(bool);

	//alert 'boolean'
	console.log(typeof bool);
}

foo();

const stuff = 0;
console.log(!!stuff);
