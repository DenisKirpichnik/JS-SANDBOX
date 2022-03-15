function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10