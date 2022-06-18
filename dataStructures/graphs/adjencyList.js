edges = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "n"],
];

// O(e)
// O(n)

const underectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	return hasPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
	const graph = {};

	for (let edge of edges) {
		const [a, b] = edge;

		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];

		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
};

const hasPath = (graph, src, dst, visited) => {
	const stack = [src];

	while (stack.length > 0) {
		const current = stack.pop();
		if (visited.has(current)) continue;
		visited.add(current);

		if (current === dst) return true;
		for (neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
	return false;
};

console.log(underectedPath(edges, "j", "m"));
