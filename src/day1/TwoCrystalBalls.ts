export default function two_crystal_balls(breaks: boolean[]): number {
    const sqrt = Math.floor(Math.sqrt(breaks.length));

    for (let i = sqrt; i < breaks.length + sqrt; i = i + sqrt) {
        if (breaks[i]) {
            for (let ii = i - sqrt; ii < i + sqrt + 1; ii++) {
                if (breaks[ii]) {
                    return ii;
                }
            }
        }
    }
    return -1;
}
