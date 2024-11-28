import { BstNode } from "./bst-node";

export function max(head: BstNode): number {
    return head.right ? max(head.right) : head.val;
}
