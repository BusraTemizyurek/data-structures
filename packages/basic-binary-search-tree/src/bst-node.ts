
export class BstNode {
    val: number;
    left?: BstNode;
    right?: BstNode;

    constructor(val: number, left?: BstNode, right?: BstNode) {
        this.val = val;
        this.left = left ?? undefined;
        this.right = right ?? undefined;
    }
}
