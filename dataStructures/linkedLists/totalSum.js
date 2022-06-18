// TIME - O(n)
// SPACE - O(1)

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

const totalSum = (head) => {
	let current = head;
	let res = 0;

	while (current !== null) {
		res += current.val;
		current = current.next;
	}
	return res;
};

console.log(totalSum(a));

// TIME - O(n)
// SPACE - O(n)

const sumList = (head) => {
	if (head === null) return 0;
	return (head.val = sumList(head.next));
};
