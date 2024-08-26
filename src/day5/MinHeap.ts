export default class MinHeap {
    public length: number;
    heap: number[];

    constructor() {
        this.heap = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.heap.push(value);
        this.heapUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) throw "Nah";

        const deleteValue = this.heap[0];
        this.length--;

        if (this.length === 0) {
            this.heap = [];
            return deleteValue;
        }

        this.heap[0] = this.heap.pop()!;
        this.heapDown(0);

        return deleteValue;
    }

    private heapUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parent = this.heap[parentIdx];
        const val = this.heap[idx];

        if (parent <= val) return;

        // DO da swap
        this.heap[parentIdx] = val;
        this.heap[idx] = parent;

        return this.heapUp(parentIdx);
    }

    private heapDown(idx: number): void {
        if (idx >= this.length) return;

        const [iL, iR] = this.children(idx);
        const [L, R] = [this.heap[iL], this.heap[iR]];
        const val = this.heap[idx];

        // If we don't have any children we're done
        // We won't have any children if the left index is past the length
        if (iL >= this.length) return;

        if (L <= R && L < val) {
            this.heap[idx] = L;
            this.heap[iL] = val;
            return this.heapDown(iL);
        }

        if (R < L && R < val) {
            this.heap[idx] = R;
            this.heap[iR] = val;
            return this.heapDown(iR);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private children(idx: number): [number, number] {
        return [2 * idx + 1, 2 * idx + 2];
    }
}
