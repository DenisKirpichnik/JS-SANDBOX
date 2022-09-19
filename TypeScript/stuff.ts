type Properties = "PropA" | "PropB";

type myMappedType<T> = {
  readonly [P in keyof T]: T[P];
};

type myNewType = myMappedType<{ a: 5; b: 10; c: 15 }>;

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type TestType = OptionsFlags<{ a: 5; b: 10; c: 15 }>;
///////

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
// type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }
