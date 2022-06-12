// stack implemented with a linked list
class MinStack {
	head = null;

	push(val) {
		const node = new Node(val);

		if (this.head === null) {
			this.head = node;
			this.head.min = val; // with a stack of size one the minimum value is the head's value
			return;
		}

		node.next = this.head;

		// each node has saved whatever the minimum element was at the time of its insertion
		if (val > this.head.min) {
			node.min = this.head.min;
		} else {
			node.min = val;
		}

		this.head = node;
	}

	pop() {
		if (this.head === null) return null;

		const oldHead = this.head;
		this.head = this.head.next;
		return oldHead.val;
	}

	top() {
		return this.head.val;
	}

	getMin() {
		return this.head.min;
	}
}

class Node {
	val = null;
	min = null;
	next = null;

	constructor(val) {
		this.val = val;
	}
}

// / stack implemented with a linked list
// class MinStack {
//   head = null;

//   push(val) {
//     const node = new Node(val);

//     if (this.head === null) {
//       this.head = node;
//       this.head.min = val; // with a stack of size one the minimum value is the head's value
//       return;
//     }

//     node.next = this.head;

// 	// each node has saved whatever the minimum element was at the time of its insertion
//     if (val > this.head.min) {
//       node.min = this.head.min;
//     }
//     else { node.min = val; }

//     this.head = node;
//   }

//   pop() {
//     if (this.head === null) return null;

//     const oldHead = this.head;
//     this.head = this.head.next;
//     return oldHead.val;
//   }

//   top() {
//     return this.head.val;
//   }

//   getMin() {
//     return this.head.min;
//   }
// }

// class Node {
//   val = null;
//   min = null;
//   next = null;

//   constructor(val) {
//     this.val = val;
//   }
// }
