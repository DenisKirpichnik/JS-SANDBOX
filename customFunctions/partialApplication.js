function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10

  function compareName<T extends {name:string}>(obj1: T, obj2: T): void{
     
    if(obj1.name === obj2.name){
        console.log("Имена совпадают");
    }
    else{
        console.log("Имена различаются");
    }
 
}