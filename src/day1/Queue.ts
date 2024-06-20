type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class Queue<T> {
    public length: number;

    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // Push to the tail
    enqueue(item: T): void {
        if (this.length === 0) {
            this.head = this.tail = {
                value: item,
                next: undefined,
            };
        } else {
            const curTail = this.tail!;

            const newTail = {
                value: item,
                next: undefined,
            };

            curTail.next = newTail;
            this.tail = newTail;
        }

        this.length++;
    }

    // Pop from the head
    deque(): T | undefined {
        if (this.length === 0) return;

        const curHead = this.head!;

        this.head = curHead.next;
        this.length--;

        return curHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
