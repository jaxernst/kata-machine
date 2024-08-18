import quick_sort from "@code/QuickSort";

describe("quick_sort", () => {
    test("sorts an array with duplicate elements", () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        quick_sort(arr);
        expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    test("sorts an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        quick_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test("sorts a reverse-sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        quick_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test("handles an empty array", () => {
        const arr: number[] = [];
        quick_sort(arr);
        expect(arr).toEqual([]);
    });

    test("handles an array with one element", () => {
        const arr = [42];
        quick_sort(arr);
        expect(arr).toEqual([42]);
    });

    test("sorts an array with negative numbers", () => {
        const arr = [-3, 5, 0, -8, 10, -1];
        quick_sort(arr);
        expect(arr).toEqual([-8, -3, -1, 0, 5, 10]);
    });

    test("sorts an array with floating-point numbers", () => {
        const arr = [3.14, 2.71, 1.41, 1.73, 0.58];
        quick_sort(arr);
        expect(arr).toEqual([0.58, 1.41, 1.73, 2.71, 3.14]);
    });
});
