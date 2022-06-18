// CAN be directed and undirected

// ITERATIVE
const DFtraverse = (graph, source) => {
	const stack = [source];

	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);
		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
};

// RECURSIVE
const DFtraverseR = (graph, source) => {
	console.log(source);
	for (let neighbor of graph[source]) {
		DFtraverseR(graph, neighbor);
	}
};

const graph = {
	a: ["c", "b"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

// DFtraverseR(graph, "a");

const BFtraverse = (graph, source) => {
	const queue = [source];
	while (queue.length > 0) {
		const current = queue.shift();
		console.log(current);

		for (let neighbor of graph[current]) {
			queue.push(neighbor);
		}
	}
};

BFtraverse(graph, "a");
