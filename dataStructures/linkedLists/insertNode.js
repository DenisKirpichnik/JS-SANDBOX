class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

const insertNode = (head, value, index) => {
	if (index === 0) {
		const newHead = new Node(value);
		newHead.next = head;
		return newHead;
	}

	let count = 0;
	let current = head;
	while (current !== null) {
		if (count === index - 1) {
			const next = current.next;
			current.next = new Node(value);
			current.next.next = next;
		}
		count += 1;
		current = current.next;
	}

	return head;
};

insertNode(a, 15, 1);

const traverseLL = (head) => {
	let current = head;

	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};

console.log(traverseLL(a));
