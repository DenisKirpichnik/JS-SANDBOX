function sleep(val, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), ms);
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("wow"), 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("such"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("bad error"), 1500);
});

// const data = Promise.all([p1, p2]).then((v) => console.log(v));

Promise.customAll = function promiseI(promises) {
  return new Promise((res, reject) => {
    let results = [];
    let count = 0;

    promises.forEach((val, i) => {
      Promise.resolve(val)
        .then((val) => {
          results[i] = val;
          count += 1;

          if (count === promises.length) res(results);
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.allR = function promiseAllRecursive(promises) {
  if (promises.length === 0) {
    Promise.resolve([]);
  }

  const [first, ...rest] = promises;

  return Promise.resolve(first).then((firstRes) => {
    return promiseAllRecursive(rest).then((restRes) => [firstRes, ...restRes]);
  });
};

const test = (promises) => {
  return new Promise((res, rej) => {
    const results = [];
    let completed = 0;

    promises.forEach((val, i) => {
      Promise.resolve(val)
        .then((val) => {
          results[i] = val;
          completed++;
          if (completed === promises.length) {
            res(results);
          }
        })
        .catch((err) => rej(err));
    });
  });
};

const data = test([p1, p2, p3])
  .then((v) => console.log(v))
  .catch((err) => console.log(err));
