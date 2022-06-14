class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// WITH STACK , ITERATIVE VERSION
const depthFirstValues = (root) => {
	if (root === null) return 0;
	const stack = [root];
	let result = 0;
	while (stack.length > 0) {
		const current = stack.pop();
		result += current.val;

		if (current.left !== null) stack.push(current.left);
		if (current.right !== null) stack.push(current.right);
	}

	return result;
};

const treeSum = (root) => {
	if (root === null) return 0;
	const leftValue = treeSum(root.left);
	const rightValue = treeSum(root.right);
	return root.val + leftValue + rightValue;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(1);
const e = new Node(4);
const f = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeSum(a));
