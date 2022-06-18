console.log(NaN === NaN);

function bar(b) {
	(function foo(a) {
		console.log(a);
	})(b).bind;
}

bar();

String(function () {});
String({ key: 42 });
String([]);

Number("");
Number(null);
Number([]);

Boolean(NaN);
Boolean({});
Boolean([]);
