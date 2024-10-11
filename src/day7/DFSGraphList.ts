export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    // Depth first search until we find the needle, then return out the path we took to get there
    // Where path is a list of node indices

    // [ [], [{ to: x, weight n}, { to: y, weight: n }]

    const search = (
        node: number,
        seen: boolean[],
        path: number[],
    ): number[] | null => {
        const connections = graph[node];

        if (connections.length == 0) return null;
        if (seen[node]) return null;

        path.push(node);

        // Does path include this node yet?
        if (node == needle) return path;

        // Visit node
        seen[node] = true;

        for (let connection of connections) {
            const foundPath = search(connection.to, seen, path);
            if (foundPath) return foundPath;
        }

        path.pop();
        return null;
    };

    const path: number[] = [];
    const seen = Array(graph.length).fill(false);

    return search(source, seen, path);
}
