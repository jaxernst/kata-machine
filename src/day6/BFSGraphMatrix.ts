import Queue from "../day1/Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    /*
  [
  (0)  [0, 1, 2]
  (1) [1, 3, 6]
  ]
  */

    // Previous array is 'who i came from'
    // So the index is the node, the value is the index of the node which got me there?
    const prev = new Array(graph.length).fill(-1);

    const seen = new Array(graph.length).fill(false);
    seen[source] = true;

    const q = [source];

    while (q.length) {
        const curNode = q.shift()!;

        if (curNode === needle) {
            break;
        }

        seen[curNode] = true;

        const weights = graph[curNode];
        for (let i = 0; i < weights.length; i++) {
            const weight = weights[i];

            if (weight > 0 && !seen[i]) {
                seen[i] = true;
                prev[i] = curNode;
                q.push(i);
            }
        }
    }

    // Determine the path we took to get to the needle node
    // Start at needle, then follow to each index until you get to a -1 (the start)
    // [-1, 1, 3, 2, -1]

    if (prev[needle] === -1) return null;

    let curNode = needle;
    const path = [];
    while (curNode > -1) {
        path.push(curNode);
        curNode = prev[curNode];
    }

    return path.reverse();
}
