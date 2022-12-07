const foo = debounce(() => {
  console.log("wow");
}, 500);

function debounce(cb, del) {
  let timerID;

  return function (...args) {
    if (timerID) clearTimeout(timerID);

    timerID = setTimeout(() => cb(...args), del);
  };
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function traverseLL(node) {
  let res = "";
  let currNode = node;
  while (currNode.next) {
    res = currNode.value + res;
    const nextNode = currNode.next;
    currNode = nextNode;
    if (currNode.next === null) {
      res = currNode.value + res;
      return Number(res);
    }
  }
}

var addTwoNumbers = function (l1, l2) {
  const num1 = traverseLL(l1);
  const num2 = traverseLL(l2);

  const sum = num1 + num2;
  const arr = String(sum).split("").reverse();
  console.log("arr", arr);
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  while (arr.length) {
    const el = Number(arr.shift());
    let newNode = new ListNode(el);
    curr.next = newNode;
    curr = newNode;
  }

  return dummyHead.next;
};

const obj22 = {
  value: 4,
  next: null,
};
const obj11 = {
  value: 3,
  next: null,
};

const obj1 = {
  value: 4,
  next: obj11,
};

const obj2 = {
  value: 6,
  next: obj22,
};

console.log(addTwoNumbers({ value: 2, next: obj1 }, { value: 5, next: obj2 }));
