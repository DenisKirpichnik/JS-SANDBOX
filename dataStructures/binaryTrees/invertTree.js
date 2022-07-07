// ITERATIVE SOLUTION
var invertTree = function (root) {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    const left = current.left;
    current.left = current.right;
    current.right = left;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return root;
};

// RECURSIVE SOLUTION

const invertTreeR = (root) => {
  if (!root) return null;
  // This swaps the left and right nodes while using recursion to do the same to their children
  [root.left, root.right] = [invertTreeR(root.right), invertTreeR(root.left)];
  return root;
};

var invertTree = function (root) {
  if (root == null) return null;
  let tempLeft = null,
    tempRight = null;
  if (root.left) tempLeft = invertTree(root.left);
  if (root.right) tempRight = invertTree(root.right);
  root.right = tempLeft;
  root.left = tempRight;
  return root;
};
