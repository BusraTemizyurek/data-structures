import { BstNode } from "./bst-node";
import { max } from "./max";

export function removeItem(head: BstNode | undefined, value: number): BstNode | undefined {
    if (!head) {
        return undefined;
    }

    if (head.val > value) {
        head.left = removeItem(head.left, value);
    }
    else if (head.val < value) {
        head.right = removeItem(head.right, value);
    }
    else {
        if (!head.left) {
            return head.right;
        }

        if (!head.right) {
            return head.left;
        }

        head.val = max(head.left);
        head.left = removeItem(head.left, head.val);
    }

    return head;
}
