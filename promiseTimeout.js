function delay(ms, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), ms);
  });
}

delay(3000, "it has been 3 seconds").then((v) => console.log(v));
