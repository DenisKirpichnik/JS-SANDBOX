var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const head = new ListNode(0, null);
  let carry = 0;

  let result = head;
  while (l1 || l2 || carry !== 0) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    const newNode = new ListNode(sum % 10, null);

    result.next = newNode;

    carry = Math.trunc(sum / 10);
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    result = result.next;
  }

  return head.next;
};
