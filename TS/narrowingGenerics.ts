function pluck<T, K extends keyof T>(objs: T[], key: K): T[K][] {
	return objs.map((obj) => obj[key]);
}

const a = pluck([{ a: 1 }, { a: "c", b: 2 }], "a");
// Type: (number|string)[]
