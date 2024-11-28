import { BstNode } from "./bst-node";

export function inorder(temp: BstNode | undefined, arr: number[]) {
    if (!temp) {
        return;
    }

    if (temp.left) {
        inorder(temp.left, arr);
    }

    arr.push(temp.val);

    if (temp.right) {
        inorder(temp.right, arr);
    }
}
