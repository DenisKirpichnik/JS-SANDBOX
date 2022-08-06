export class Subscribable<MessageType> {
	private susbscribers: Set<(msg: MessageType) => void> = new Set();

	constructor() {}

	subscribe(cb: (msg: MessageType) => void): () => void {
		this.susbscribers.add(cb);
		return () => {
			this.susbscribers.delete(cb);
		};
	}

	publish(msg: MessageType): void {
		this.susbscribers.forEach((cb) => cb(msg));
	}
}
