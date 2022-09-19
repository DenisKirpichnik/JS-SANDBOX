// If it looks like a duck, quacks like a duck, but needs batteries - you probably have the wrong abstraction

class Duck {}

class Person {
	squeezeDuck() {}
	throwDuckInTub() {}
}

class RubberDuckBad extends Duck {
	quack() {
		const person = new Person();
		console.log("can only quack if squuezed");
	}
	fly() {
		console.log("cannot fly");
	}
	swim() {
		console.log("cannot swim on its own");
	}
}

///////// REFACTORED /////////////

interface QuackableInterface {
	quack: () => void;
}

interface FlyableInterface {
	fly: () => void;
}

interface SwimmableInterface {
	swim: () => void;
}

class RubberDuck implements QuackableInterface, SwimmableInterface {
	quack() {
		//real duck
		if (true) {
			console.log("quack quack");
		} else {
			console.log("can only quack if squuezed");
		}
	}

	swim() {
		//real duck
		if (true) {
			console.log("swims");
		} else {
			console.log("can only float");
		}
	}
}
