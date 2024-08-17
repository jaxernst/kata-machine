export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    // Base cases:
    // - Find the end
    // - Hit a wall
    // - Have seen this tile
    // - Off the map

    /*
    [
      "xxxx x",
      "      ",
      "xx xxx",
    ]
      */

    const mazeWidth = maze[0].length;
    const mazeHeight = maze.length;

    function walk(
        path: Point[],
        seen: Set<string> = new Set(),
    ): Point[] | undefined {
        const curPoint = path.at(-1)!;
        const strPoint = `${curPoint.x}${curPoint.y}`;

        const outOfBounds =
            curPoint.x < 0 ||
            curPoint.x >= mazeWidth ||
            curPoint.y < 0 ||
            curPoint.y >= mazeHeight;

        // Base cases
        if (curPoint.x === end.x && curPoint.y === end.y) return path;
        if (outOfBounds) return;
        if (maze[curPoint.y][curPoint.x] === wall) return;
        if (seen.has(strPoint)) return;

        const updatedSeen = seen.add(strPoint);

        return (
            walk(
                [...path, { x: curPoint.x, y: curPoint.y + 1 }],
                updatedSeen,
            ) || // Up
            walk(
                [...path, { x: curPoint.x + 1, y: curPoint.y }],
                updatedSeen,
            ) || // Right
            walk(
                [...path, { x: curPoint.x, y: curPoint.y - 1 }],
                updatedSeen,
            ) || // Down
            walk([...path, { x: curPoint.x - 1, y: curPoint.y }], updatedSeen) // Left
        );
    }

    const res = walk([start])!;
    console.log(res);
    return res;
}
