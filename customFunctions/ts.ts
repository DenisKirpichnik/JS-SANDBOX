type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
	if ("swim" in animal) {
		return animal.swim();
	}

	return animal.fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

const bird: Bird = {
	fly: () => console.log("wow"),
};

console.log(isFish(bird));

const MyArray = [
	{ name: "Alice", age: 15 },
	{ name: "Bob", age: 23 },
	{ name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

// type Person = {
// 	name: string;
// 	age: number;
// };
type Age = typeof MyArray[number]["age"];

// type Age = number;
// Or
// type Age2 = Person["age"];

type Age2 = number;

interface Animal {
	live(): void;
}
interface Dog extends Animal {
	woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

//   type Example1 = number

type Example2 = RegExp extends Animal ? number : string;

// type Example2 = string;

interface IdLabel {
	id: number /* some fields */;
}
interface NameLabel {
	name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
	? IdLabel
	: NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
	throw "unimplemented";
}

let a = createLabel("typescript");

// let a: NameLabel;

let b = createLabel(2.8);

// let b: IdLabel;

let c = createLabel(Math.random() ? "hello" : 42);
// let c: NameLabel | IdLabel;

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
	message: string;
}

type EmailMessageContents = MessageOf<Email>;

// type EmailMessageContents = string;

type MessageOf1<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
	message: string;
}

interface Dog {
	bark(): void;
}

type EmailMessageContents1 = MessageOf1<Email>;

// type EmailMessageContents = string;

type DogMessageContents = MessageOf1<Dog>;

// type DogMessageContents = never;

type OptionsFlags<Type> = {
	[Property in keyof Type]: boolean;
};

type FeatureFlags = {
	darkMode: () => void;
	newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// type FeatureOptions = {
// 	darkMode: boolean;
// 	newUserProfile: boolean;
// };

type CreateMutable<Type> = {
	-readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
	readonly id: string;
	readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

//   type UnlockedAccount = {
//       id: string;
//       name: string;
//   }

type RemoveKindField<Type> = {
	[Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
	kind: "circle";
	radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

// type KindlessCircle = {
// 	radius: number;
// };

console.log("1");

setTimeout(function () {
	console.log("2");
}, 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
