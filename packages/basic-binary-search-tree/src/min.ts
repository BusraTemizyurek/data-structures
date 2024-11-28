import { BstNode } from "./bst-node";

export function min(head: BstNode): number {
    return head.left ? min(head.left) : head.val;
}
