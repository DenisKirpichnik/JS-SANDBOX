var hasCycle = function (head) {
	let set = new Set();
	while (head) {
		if (set.has(head)) return true;
		set.add(head);
		head = head.next;
	}
	return false;
};

// create 2 pointers one moves double the speed of the other, eventually :-
// if(they coincide) means cycle exists
// else if exception is thrown end of the linked list came , no cycle was detected

const hasCycle1 = function (head) {
	try {
		let slowPointer = head,
			fastPointer = head;
		while (true) {
			slowPointer = slowPointer.next;
			fastPointer = fastPointer.next.next;
			if (slowPointer === fastPointer) return true;
		}
	} catch (e) {
		return false;
	}
};
