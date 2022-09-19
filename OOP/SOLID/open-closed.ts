////////////////// Breaks Open-closed /////////////////////////

class Payment {
	constructor() {}
	payWithCreditCard() {
		// some logic
	}

	payWithCreditPaypal() {
		// some logic
	}

	payWithCreditYandex() {
		// some logic
	}
}

function payB(request: any) {
	let payment;

	if ((request = "credit")) {
		payment = new Payment().payWithCreditCard();
	} else if ((request = "paypal")) {
		payment = new Payment().payWithCreditPaypal();
	} else {
		payment = new Payment().payWithCreditYandex();
	}
}

//////////////////// Refactored ///////////////////////

interface PayableInterface {
	pay: () => void;
}

class CreditCardPayment implements PayableInterface {
	pay() {
		console.log("paying with card");
		// some cool logic
	}
}

class PaypalPayment implements PayableInterface {
	pay() {
		console.log("paying with paypal");
		// some cool logic
	}
}

class YandexPayment implements PayableInterface {
	pay() {
		console.log("paying with yandex");
		// some cool logic
	}
}

type Payments = "credit" | "paypal" | "yandex";

class PaymentFactory {
	initializePayment(type: Payments) {
		if (type === "credit") {
			return new CreditCardPayment();
		} else if (type === "paypal") {
			return new PaypalPayment();
		} else if (type === "yandex") {
			return new YandexPayment();
		}

		throw new Error("Wrong payment type");
	}
}

function pay(type: Payments) {
	const paymentFactory = new PaymentFactory();
	const payment = paymentFactory.initializePayment(type);
	payment.pay();
}

pay("credit");
