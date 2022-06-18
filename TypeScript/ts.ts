// I.Partial - makes properties optional
type MyPartial<T> = Partial<T>; // { [P in keyof T]?: T[P]; }

interface Todo {
	title: string;
	description: string;
}

type R = {
	[P in keyof Todo]: Todo[P];
};

function updateTodo(todo: Todo, fieldsToUpdate: MyPartial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
	title: "wow",
	description: "wow1",
};

const todo2 = {
	title: "wcool",
};

// II. Required - Partial makes properties required

type MyRequired<T> = Required<T>; // { [P in keyof T]-?: T[P]; }

interface Props {
	a?: number;
	b?: string;
}

const obj: Props = { a: 5 };
const obj2: MyRequired<Props> = { a: 5, b: "2" };

// III. Readonly

type MyReadonly<T> = Readonly<T>; // { +readonly [P in keyof T]: T[P] };

interface Todo1 {
	title: string;
}

const todo: MyReadonly<Todo1> = {
	title: "Delete inact users",
};

// todo.title = "Hello";  WRONG WRONG OMG

// IV. Record -

type MyRecord<K extends string | symbol | number, T> = Record<K, T>; // { [P in K]: T };

interface CatInfo {
	age: number;
	breed: string;
}

type CatName = "miffy" | "boris" | "mordred"; // Union type

const cats: MyRecord<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 10, breed: "Persian" },
	mordred: { age: 10, breed: "Persian" },
};

cats.boris;

// V. Pick

type MyPick<T, K extends keyof T> = Pick<T, K>; // { [P in K]: T[P]; }

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

// VI. Omit

type MyOmit<T, K extends keyof T> = {
	[P in keyof T as P extends K ? never : K]: T[P];
};
type MyPick5<T, K extends keyof T> = { [P in Extract<keyof T, K>] };
// { [P in K as never]: T[P]; } // Omit<T, K>; //
// { [P in Exclude<keyof T, K>]: T[P]; }
type True = true;
type False = false;

type If<C, T, F> = C extends true ? T : F;
type F = If<false, "1", "0">;

interface Todo5 {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type TodoInfo3 = MyOmit<Todo5, "completed" | "createdAt">;

const todoInfo: TodoInfo3 = {
	description: "gag",
};

// VII. Parameters

// type Awaited<T> = any;

// type MyParameters<T> = any;

// type T0 = MyParameters<() => void>;
// type T1 = MyParameters<(s: string) => void>;
// type T2 = MyParameters<<T>(arg: T) => T>;
// type T3 = MyParameters<(arg: { a: number; b: string }) => void>;

// type Awaited<T> = T extends Promise<infer A> ? A : T;
// type Awaited1<T, K> = T extends Promise<K> ? K : T;
// type R = Awaited<Promise<string>>;
// type J = Awaited<Promise<number>>;

// const first = Promise.resolve(2);
// const seconds = 2;
// const third = Promise.resolve("1234");

// type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

// function (fn): (...args: Parameters<typeof fn>) => boolean   {
//     return function ()
// }

// type T0 = MyParameters<() => void>;
// type T1 = MyParameters<(s: string) => void>;
// type T2 = MyParameters<<T>(arg: T) => T>;
// type T3 = MyParameters<(arg: { a: number; b: string }) => void>;

// ReturnType<T>

type MyReturnType<T extends (...args: any) => any> = ReturnType<T>; // T extends (...args: any) => infer R ? R : any

function hello(name: unknown) {
	if (typeof name === "string") {
		console.log(name);
	}
}

type T5 = MyReturnType<() => void>;
type T6 = MyReturnType<(s: string) => void>;
type T7 = MyReturnType<<T>(arg: T) => T>;
type T8 = MyReturnType<(arg: { a: number; b: string }) => void>;

// Recursive Types , chainable

type Chainable<O = {}> = {
	// Recursion
	option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
	get(): O;
};

declare const a: Chainable;

const result = a
	.option("foo", 123)
	.option("bar", { value: "Heelo" })
	.option("name", "type")
	.get();

result.bar.value;
