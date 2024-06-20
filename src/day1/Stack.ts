type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};
export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        if (this.length === 0) {
            this.head = {
                value: item,
                next: undefined,
            };
        } else {
            const curHead = this.head!;

            const newHead = {
                value: item,
                next: curHead,
            };

            this.head = newHead;
        }

        this.length++;
    }

    pop(): T | undefined {
        if (this.length === 0) return;

        const curHead = this.head!;

        this.head = curHead.next;
        this.length--;

        // For completeness (deallocation not necessary)
        curHead.next = undefined;

        return curHead?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
