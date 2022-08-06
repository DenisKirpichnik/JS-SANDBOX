// imported model from lib
class Model {}

class SubscriberB extends Model {
	subscribe() {
		//some logic
	}
	unsubscribe() {
		//some logic
	}
	getNotifyEmail() {
		//some logic
	}
}

/// two more useless function
class NotificationsB {
	send(subscriber, message) {
		subscriber.getNotifyEmail();
	}
}

//// GOOD ////

interface NotifiableInterface {
	getNotifyEmail: () => string;
}

class Notifications {
	send(subscriber: NotifiableInterface, message) {
		subscriber.getNotifyEmail();
	}
}
