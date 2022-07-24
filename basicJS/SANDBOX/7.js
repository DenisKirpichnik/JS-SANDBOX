const promise = new Promise((resolve) => setTimeout(resolve, 3000)).then(() => console.log("wow"));

const wait = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

(async () => {
  console.log(1);
  await wait(2000);
  console.log(2);
})();

const promise1 = Promise.resolve(3);

const promise2 = 42;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "bar");
});

Promise.customAll = function (valuesArr) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    valuesArr.forEach((value, i) =>
      Promise.resolve(value)
        .then((result) => {
          completed++;
          results[i] = result;
          if (completed === valuesArr.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err))
    );
  });
};

Promise.customAll([promise1, promise2, promise3]).then((values) => console.log(values));
