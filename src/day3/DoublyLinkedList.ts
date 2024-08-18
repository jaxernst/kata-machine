export default class DoublyLinkedList<T> {
    public length: number;

    head?: ListNode<T>;
    tail?: ListNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length === 0) {
            this.head = this.tail = { value: item };
        } else {
            if (!this.head) throw "Invariant error";

            const curHead = this.head;
            const newHead = { value: item, next: curHead };
            curHead.prev = newHead;

            this.head = newHead;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw "Out of bounds";
        if (idx === 0) return this.prepend(item);
        if (idx === this.length) return this.append(item);

        let curNode = this.head!;
        for (let i = 0; i < idx; i++) {
            curNode = curNode.next!;
            if (!curNode.next) throw "Invariant error";
        }

        const prevNode = curNode.prev!;
        const newNode = { value: item, next: curNode, prev: prevNode };

        prevNode.next = newNode;
        curNode.prev = newNode;

        this.length++;
    }

    append(item: T): void {
        if (this.length === 0) {
            this.head = this.tail = { value: item };
        } else {
            const oldTail = this.tail!;
            const newNode = { value: item, prev: oldTail };

            oldTail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        let curNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (!curNode) return;
            if (curNode.value === item) {
                if (curNode.prev) curNode.prev.next = curNode.next;
                if (curNode.next) curNode.next.prev = curNode.prev;
                if (curNode === this.head) this.head = curNode.next;
                if (curNode === this.tail) this.tail = curNode.prev;

                this.length--;
                return curNode.value;
            }

            curNode = curNode.next;
        }

        return;
    }

    get(idx: number): T | undefined {
        let curNode = this.head;
        for (let i = 0; i < idx; i++) {
            curNode = curNode?.next;
        }

        return curNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        let curNode = this.head;
        for (let i = 0; i < idx; i++) {
            curNode = curNode?.next;
        }

        if (curNode) {
            if (curNode.next) curNode.next.prev = curNode.prev;
            if (curNode.prev) curNode.prev.next = curNode.next;
            if (curNode === this.head) this.head = curNode.next;
            if (curNode === this.tail) this.tail = curNode.prev;

            this.length--;
            return curNode.value;
        }

        return undefined;
    }
}
