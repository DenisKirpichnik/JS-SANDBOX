Array.prototype.myReduce = function (f, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (i < this.length; i++; ) {
    result = f(result, this[i], i, this);
  }
  return result;
};

const wow = [1, 2, 3].myReduce((a, b) => a + b, 0);
console.log(wow);
