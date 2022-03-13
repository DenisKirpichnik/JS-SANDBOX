function logTest() {
	let start = Date.now();
	let now = start;
	let a;

	setTimeout(function () {
		if (!a) a = "1";
		console.log("a1 =", a);
	}, 100);

	while (now - start < 3000) {
		now = Date.now;
	}

	a = "2";

	console.log("a2 =", a);
}

logTest();
