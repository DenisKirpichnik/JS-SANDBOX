const rectangleArea = (width, length) => {
  return width * length;
};

function countParams(fn) {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error("wow sobad");
    }
    return fn(...params);
  };
}

const check = countParams(rectangleArea)(1, 2);
console.log(check);
