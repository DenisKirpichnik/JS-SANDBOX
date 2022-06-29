class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(4);
const c = new Node(3);

a.next = b;
b.next = c;
c.next = null;

const d = new Node(5);
const e = new Node(6);
const f = new Node(4);

d.next = e;
e.next = f;
f.next = null;

const traverseL = (head, res, key) => {
  let current = head;

  while (current !== null) {
    res[key] = res[key] + current.val;
    current = current.next;
  }
};

var addTwoNumbers = function (l1, l2) {
  const res = { first: "", second: "" };
  traverseL(l1, res, "first");
  traverseL(l2, res, "second");
  const final = String(Number(res.first) + Number(res.second));
  const reverse = final.split("").reverse("").jo;
  console.log(reverse);
  let newNode = new Node(reverse[0]);
  var temp = newNode;
  for (let i = 1; i < reverse.length; i++) {
    temp.next = new Node(final.charAt(i));
    temp = temp.next;
  }
  return newNode;
};

console.log(addTwoNumbers(a, d));

//////
var addTwoNumbers1 = function (l1, l2) {
  let x1 = [];
  let x2 = [];
  let x3 = [];

  while (l1) {
    x1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    x2.push(l2.val);
    l2 = l2.next;
  }

  x3 = (BigInt(x1.reverse().join("")) + BigInt(x2.reverse().join(""))).toString().split("").reverse().join("");

  var ne = new ListNode(x3.charAt(0));
  var temp = ne;

  for (let i = 1; i < x3.length; i++) {
    temp.next = new ListNode(x3.charAt(i));
    temp = temp.next;
  }

  return ne;
};
