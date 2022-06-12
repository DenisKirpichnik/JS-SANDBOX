import { Subscribable } from "./pubSubHerrington";

const sub = new Subscribable<string>();
sub.subscribe(console.log);
sub.publish("heelo");
const unsub = sub.subscribe(console.log);
unsub();
sub.publish("bye");

class DataClass extends Subscribable<number> {
	constructor(public value: number) {
		super();
	}

	setVlaue(v: number) {
		this.value = v;
		this.publish(v);
	}
}

const dc = new DataClass(0);
const dcUnsub = dc.subscribe((v: number) => console.log(v));
dc.setVlaue(42);
dcUnsub();
