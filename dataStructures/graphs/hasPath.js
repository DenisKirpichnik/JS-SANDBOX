const graph = {
	f: ["g", "i"],
	g: ["h"],
	h: [],
	i: ["g", "k"],
	j: ["i"],
	k: [],
};

const hasPath = (graph, src, dst) => {
	const stack = [src];

	while (stack.length > 0) {
		const current = stack.pop();
		if (current === dst) return true;
		for (neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
	return false;
};

const hasPathR = (graph, src, dst) => {
	if (src === dst) return true;

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst) === true) {
			return true;
		}
	}
	return false;
};

console.log(hasPathR(graph, "f", "k")); // true
