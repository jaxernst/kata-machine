export default function pre_order_search(head: BinaryNode<number>): number[] {
    const traverse = (
        node: null | BinaryNode<number>,
        vals: number[] = [],
    ): number[] => {
        if (!node) return vals;

        vals.push(node.value);
        traverse(node.left, vals);
        traverse(node.right, vals);

        return vals;
    };

    return traverse(head);
}
