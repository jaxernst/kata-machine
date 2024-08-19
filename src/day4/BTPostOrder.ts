export default function post_order_search(head: BinaryNode<number>): number[] {
    const traverse = (
        node: null | BinaryNode<number>,
        vals: number[] = [],
    ): number[] => {
        if (!node) return vals;

        traverse(node.left, vals);
        traverse(node.right, vals);
        vals.push(node.value);

        return vals;
    };

    return traverse(head);
}
