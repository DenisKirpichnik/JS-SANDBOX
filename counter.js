function counter() {
  // Private counter variable
  let count = 0;

  // To increment the value of counter
  function increment() {
    count++;
    console.log(count);
  }

  // To decrement the value of counter
  function decrement() {
    count--;
  }

  return increment;
}
const closure = counter();

closure();
closure();
