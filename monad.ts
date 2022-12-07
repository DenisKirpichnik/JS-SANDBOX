const Identity = (x: any) => ({
  emit: () => x,
  chain: (f: any) => f(x),
  map: (f: any) => Identity(f(x)),
  inspect: () => `Identity(${x})`,
});

// example use:
const one = Identity(1);
//   .map((a: number) => a + 2)
//   .emit();
console.log(one.chain((a: any) => a * 5));
