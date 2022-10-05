Array.prototype.myMap = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw new Error("The callback is not a function");
  }
  if (!this) {
    throw new Error("Cannot call map on null or undefined");
  }

  let resArray = [];
  for (let i = 0; i < this.length; i++) {
    const changedValue = callback(this[i], i, this);
    resArray.push(changedValue);
  }
  return resArray;
};
