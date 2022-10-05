// undeclared variables are global
{
  var stuff = "cool";
}

// console.log("wow", stuff);

// var carName = "Volvo";
// // code here can use window.carName

// let carName1 = "BMW";
// // code here can not use window.carName

// var fullMoon = true;

// // Attempt to use a variable before declaring it
// console.log(x);

// // Variable assignment without var
// x = 100;

// // The code we wrote
// console.log(x);
// var x = 100;

// // How JavaScript interpreted it
// var x;
// console.log(x);
// x = 100;

// // Initialize x in the global scope
// var x = 100;

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// hoist();

// function counter() {
//   // Private counter variable
//   let count = 0;

//   // To increment the value of counter
//   function increment() {
//     count++;
//     console.log(count);
//   }

//   // To decrement the value of counter
//   function decrement() {
//     count--;
//   }

//   return { increment, decrement };
// }
// const closure = counter();

// closure.increment();
// closure.increment();

// function test() {
//   var foo = 33;
//   if (foo) {
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// function go(n) {
//   // n here is defined!
//   console.log(n); // Object {a: [1,2,3]}

//   for (let n of n.a) {
//     // ReferenceError
//     console.log(n);
//   }
// }

// go({ a: [1, 2, 3] });

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the if-block

//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// function showHelp(help) {
//   document.getElementById("help").textContent = help;
// }

// // function factory
// function makeHelpCallback(help) {
//   return function () {
//     showHelp(help);
//   };
// }

// function setupHelp() {
//   var helpText = [
//     { id: "email", help: "Your e-mail address" },
//     { id: "name", help: "Your full name" },
//     { id: "age", help: "Your age (you must be over 16)" },
//   ];

//   for (var i = 0; i < helpText.length; i++) {
//     var item = helpText[i];
//     document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//   }
// }

// setupHelp();
