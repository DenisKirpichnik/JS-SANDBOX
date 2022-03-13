// // Generators
// function* genTest(start = 0, end = Infinity, step = 1) {
// 	let iterationCount = 0;
// 	for (let i = start; i < end; i += step) {
// 		iterationCount++;
// 		yield i;
// 	}
// 	return iterationCount;
// }

// let generator = genTest();
// generator.next();
// generator.next();
// let three = generator.next();
// console.log(JSON.stringify(three));

// // for (let value of generator) {
// // 	console.log(value);
// // }

// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		yield i;
// 	}
// }

// // Используем оператор … для преобразования итерируемого объекта в массив
// let sequence = [...generateSequence(2, 5)];

// console.log(sequence);

// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) yield i;
// }

// function* generateAlphaNum() {
// 	// 0..9
// 	yield* generateSequence(48, 57);

// 	// A..Z
// 	yield* generateSequence(65, 90);

// 	// a..z
// 	yield* generateSequence(97, 122);

// 	// Generators in a generator is called "Composition"

// 	// // yield* generateSequence(48, 57);
// 	// for (let i = 48; i <= 57; i++) yield i;

// 	// // yield* generateSequence(65, 90);
// 	// for (let i = 65; i <= 90; i++) yield i;

// 	// // yield* generateSequence(97, 122);
// 	// for (let i = 97; i <= 122; i++) yield i;
// }

// let str = "";

// for (let code of generateAlphaNum()) {
// 	str += String.fromCharCode(code);
// }

// console.log(str); // 0..9A..Za..z

// ////////////////////////

// function* gen() {
// 	// Передать вопрос во внешний код и подождать ответа
// 	let result = yield "2 + 2?";

// 	console.log(result);
// }

// let generator = gen();

// let question = generator.next().value;
// // "2 + 2?"

// setTimeout(() => generator.next(4), 2000);

/// Generators with Promises

// генератор для получения и показа аватара
// он yield'ит промисы
function* showUserAvatar() {
	let userFetch = yield fetch("/article/generator/user.json");
	let userInfo = yield userFetch.json();

	let githubFetch = yield fetch(
		`https://api.github.com/users/${userInfo.name}`
	);
	let githubUserInfo = yield githubFetch.json();

	let img = new Image();
	img.src = githubUserInfo.avatar_url;
	img.className = "promise-avatar-example";
	document.body.appendChild(img);

	yield new Promise((resolve) => setTimeout(resolve, 3000));

	img.remove();

	return img.src;
}

// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {
	let next = generator.next(yieldValue);

	if (!next.done) {
		next.value.then(
			(result) => execute(generator, result),
			(err) => generator.throw(err)
		);
	} else {
		// обработаем результат return из генератора
		// обычно здесь вызов callback или что-то в этом духе
		alert(next.value);
	}
}

execute(showUserAvatar());
