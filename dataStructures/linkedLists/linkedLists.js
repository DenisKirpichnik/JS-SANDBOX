// TRAVERSING LINKED LIST ITERATIVE
// Time: O(n)
// Space: O(n)
// insertion O(1)
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;
d.next = null;

const traverseLL = (head) => {
	let current = head;

	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};

// TRAVERSING LINKED LIST RECURSIVE
const printLinkedList = (head) => {
	if (head === null) return;
	console.log(head.val);
	printLinkedList(head.next);
};

// TRAVERSING AND PUSHING VALUES
const linkedListValues = (head) => {
	const values = [];
	let current = head;
	while (current !== null) {
		values.push(current.val);

		current = current.next;
	}
	return values;
};

// TRAVERSING AND PUSHING VALUES RECURSIVELY
const linkedListValuesR = (head) => {
	const values = [];
	fillValues(head, values);
	return values;
};

const fillValues = (head, values) => {
	if (head === null) return;
	values.push(head.val);
	fillValues(head.next, values);
};

console.log(linkedListValuesR(a));
