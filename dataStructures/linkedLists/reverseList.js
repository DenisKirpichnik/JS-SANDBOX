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

const reverseList = (head) => {
	let current = head;
	let prev = null;
	while (current !== null) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
};

reverseList(a);

const traverseLL = (head) => {
	let current = head;

	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};

traverseLL(a);
