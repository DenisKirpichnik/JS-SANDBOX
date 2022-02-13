const compose = (...fns) =>
	fns.reduce(
		(f, g) =>
			(...args) =>
				f(g(...args))
	);

const sum = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const addTransactionFee = sum(2);
const addTax = multiply(1.1);
const addMonthlyPromotion = multiply(0.8);

// Result of compose function below equals to addTransactionFee(addTax(addMonthlyPromotion(100)))
const paymentAmount = compose(
	addTransactionFee,
	addTax,
	addMonthlyPromotion
)(100); // 100 * 0.8 * 1.1 + 2 = 90

console.log(paymentAmount);
