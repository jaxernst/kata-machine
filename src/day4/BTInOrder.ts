export default function in_order_search(head: BinaryNode<number>): number[] {
    const traverse = (
        node: null | BinaryNode<number>,
        vals: number[] = [],
    ): number[] => {
        if (!node) return vals;

        traverse(node.left, vals);
        vals.push(node.value);
        traverse(node.right, vals);

        return vals;
    };

    return traverse(head);
}
