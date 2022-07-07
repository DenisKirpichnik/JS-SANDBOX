const isSameTree = (p, q) => {
  if ((p && !q) || (!p && q)) return false;
  if (!p && !q) return true;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// QUEUE IMPLEMENTATION
class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  }

  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear = this.rear + 1;
    }
  }
  length() {
    return this.rear;
  }
  isEmpty() {
    return this.rear === 0;
  }
  getFront() {
    if (this.isEmpty() === false) {
      return this.data[0];
    }
  }
  getLast() {
    if (this.isEmpty() === false) {
      return this.data[this.rear - 1];
    }
  }
  dequeue() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1;
      return this.data.shift();
    }
  }
  print() {
    for (let i = 0; i < this.rear; i++) {
      console.log(this.data[i]);
    }
  }
  clear() {
    this.data.length = 0;
    this.rear = 0;
  }
}

// ITERATIVE SOLUTION

const areNodesSame = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  const pQueue = new Queue();
};
