class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class DoublyLinkedLust {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	insert(value) {
		this.length++;
		let newNode = createNode(value);

		if (this.tail) {
			// list is not empty
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}
}

const cities = [
	{ from: "Gukovo", to: "Sulin" },
	{ from: "Rostov", to: "Peter" },
	{ from: "Sulin", to: "Rostov" },
	{ from: "Moscow", to: "Bagaevka" },
	{ from: "Peter", to: "Moscow" },
];

const sort = (cities) => {
	const map = cities.reduce((acc, { from, to }) => {
		const map = {}; // name, from , to
		let firstCity;
		if (map.hasOwnProperty(from)) {
		} else {
		}

		let lastCity;

		return acc;
	}, {});
};

console.log(sort(cities));
