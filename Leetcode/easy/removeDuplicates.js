var deleteDuplicates = function (head) {
	let current = head;
	while (current && current.head) {
		if (current.val === current.nex.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	return head;
};
