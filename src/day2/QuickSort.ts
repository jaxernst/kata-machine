function _sort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;

    const pivotIdx = partition(arr, lo, hi);

    _sort(arr, lo, pivotIdx - 1);
    _sort(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let pivot = arr[hi];

    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        let val = arr[i];
        if (val <= pivot) {
            idx++;

            // Swap
            arr[i] = arr[idx];
            arr[idx] = val;
        }
    }

    // Put pivot at end
    idx++;

    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(
    arr: number[], // [1,5,2,8,6,0,3]
): void {
    _sort(arr, 0, arr.length - 1);
}
