function promiseAll(promises) {
	const outputs = [];
	let settledPromiseCounter = 0;
	return new Promise((resolve, reject) => {
		promises.forEach((promise, i) => {
			promise
				.then((value) => {
					outputs[i] = value;
					settledPromiseCounter++;
					if (settledPromiseCounter === promises.length) {
						resolve(outputs);
					}
				})
				.catch(reject);
		});
	});
}

const slowPromise = new Promise((res) => {
	setTimeout(() => res("done"), 100);
});

const promises = [
	Promise.resolve(2),
	Promise.resolve(2),
	Promise.resolve(2),
	Promise.resolve(2),
	Promise.resolve(2),
];

promiseAll(promises).then(console.log);
