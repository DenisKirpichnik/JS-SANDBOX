Array.prototype.myFilter = function (fn) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    if (result) res.push(this[i]);
  }

  return res;
};

const wow = [1, 2, 3, 4].myFilter((a, i) => i > 0);
console.log(wow);
