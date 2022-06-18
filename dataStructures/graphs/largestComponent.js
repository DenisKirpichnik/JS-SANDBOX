const graph = {
	0: ["8", "1", "5"],
	1: ["0"],
	5: ["0", "8"],
	8: ["0", "5"],
	2: ["3", "4"],
	3: ["2", "4"],
	4: ["3", "2"],
};

const largestComponent = (graph) => {
	const visited = new Set();
	let longest = 0;

	for (let node in graph) {
		const res = explore(graph, node, visited);
		if (res > longest) longest = res;
	}
	return longest;
};

const explore = (graph, node, visited) => {
	if (visited.has(String(node))) return 0;
	visited.add(String(node));
	let size = 1;

	for (let neighbor of graph[node]) {
		size += explore(graph, neighbor, visited);
	}

	return size;
};

console.log(largestComponent(graph));
