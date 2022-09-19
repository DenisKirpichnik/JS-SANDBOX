// Mapped types
type AppConfig = {
  username: string;
  layout: string;
};

type AppPermissions = {
  [Property in keyof AppConfig as `change${Capitalize<Property>}`]: boolean;
};

// Indexed access types
type AppConfig1 = {
  username: string;
  layout: string;
};

type Username = AppConfig1["username"];

//Index signatures
type User = {
  name: string;
  preferences: {
    [key: string]: string;
  };
};

const currentUser: User = {
  name: "Foo Bar",
  preferences: {
    lang: "en",
  },
};
const currentLang = currentUser.preferences.lang;

// Union types
type StringOrNumberUnion = string | number;

let value4: StringOrNumberUnion = "hello, world!";
value4 = 100;

type Animal = {
  name: string;
  species: string;
};

type Person2 = {
  name: string;
  age: number;
};

type AnimalOrPerson = Animal | Person2;

// const value: AnimalOrPerson = loadFromSomewhereElse();

// console.log(value.name); // No problem, both Animal and Person have the name property.
// console.log(value.age); // Compilation error; value might not have the age property if it is an Animal.

// if ("age" in value) {
//   console.log(value.age); // No problem, TS knows that value has the age property, and therefore it must be a Person if we're inside this if block.
// }

// Keyof operator

type AppConfig5 = {
  username: string;
  layout: string;
};

type AppConfigKey = keyof AppConfig5;

//with index signatures
type User111 = {
  name: string;
  preferences: {
    [key: string]: string;
  };
};

type UserPreferenceKey = keyof User111["preferences"];
// Tuple
type Currency = [number, string];

const amount: Currency = [100, "USD"];

function add(values: number[]) {
  return values.reduce((a, b) => a + b);
}

//add(amount);
// Error: Argument of type 'Currency' is not assignable to parameter of type 'number[]'.
// Type 'string' is not assignable to type 'number'.

// REAL WORLD EXAMPLE
type Device = {
  manufacturer: string;
  price: number;
  releaseYear: number;
};

type DeviceFormatter = {
  [Key in keyof Device as `format${Capitalize<Key>}`]: (
    value: Device[Key]
  ) => string;
};

//  reusable formatter type with generics

type Accessory = {
  color: string;
  size: number;
};

type AccessoryFormatter = {
  [Key in keyof Accessory as `format${Capitalize<Key>}`]: (
    value: Accessory[Key]
  ) => string;
};

type Formatter<T> = {
  [Key in keyof T as `format${Capitalize<Key & string>}`]: (
    value: T[Key]
  ) => string;
};

// GENERICS
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
//getProperty(x, "m");

// Factories
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
