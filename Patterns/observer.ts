// The observer pattern is a design pattern in which you define a one-to-many relationship from one object known as the subject to many other objects known as the observers.
// These observers can be functions that watch the subject and wait for a signal or notification from the subject before they run.
// In the observer pattern when an object is modified, it notifies its dependent objects that changes have occurred to its state.
// An example is the model-view-controller architecture. When the view updates the model changes.

// MVC - is an example of observer pattern
// Event handlers is an example of Observer pattern, listen to a specific event and only run when that event is fired

class Subject {
	observers: any[];

	constructor() {
		this.observers = [];
	}

	getIndex(observer) {
		return this.observers.indexOf(observer);
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((item) => item !== observer);
	}

	notify(observer) {
		let observerIndex = this.getIndex(observer);
		if (observerIndex > -1) {
			this.observers[observerIndex].notify(observerIndex);
		}
	}

	notifyAll() {
		this.observers.forEach((observer) => {
			observer.notify();
		});
	}

	count() {
		return this.observers.length;
	}
}

class Observer {
	id: number;
	constructor(id) {
		this.id = id;
	}
	notify() {
		console.log(`Observer ${this.id} has been notified!`);
	}
}

const subject = new Subject();
const observer1 = new Observer(1);
const observer2 = new Observer(2);

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notifyAll();

subject.unsubscribe(observer1);
subject.count(); // prints 1
subject.notify(observer2);
