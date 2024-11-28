import { BstNode } from "./bst-node";
import { inorder } from "./inorder";
import { max } from "./max";
import { min } from "./min";
import { removeItem } from "./removeItem";

/**
 * This class creates a binary search tree (BST).
 */
export class BinarySearchTree {
    private root: BstNode | undefined = undefined;

    /**
     * This function is taking a number adds the number to the binary search tree. If the given number already exist in tree. It will not add the given number.
     * @param value - number to be added
     */
    public add(value: number) {
        if (!this.root) {
            this.root = new BstNode(value);
        }
        else {
            const newItem = new BstNode(value);

            let temp: BstNode | undefined = this.root;
            while (temp) {
                if (temp.val > value) {
                    if (temp.left) {
                        temp = temp.left;
                    } else {
                        temp.left = newItem;
                    }
                }
                else if (temp.val < value) {
                    if (temp.right) {
                        temp = temp.right;
                    } else {
                        temp.right = newItem;
                    }
                }
                else {
                    return;
                }
            }
        }
    }

    /**
     * This function uses current tree head to print values in tree using inorder traversal. If the tree is empty it will return empty array.
     * @returns - number array includes the binary search tree items
     */
    public toArray(): number[] {
        let temp = this.root;
        const arr: number[] = [];
        inorder(temp, arr)
        return arr;
    }

    /**
     * This function takes number and removes it from the binary search tree. If the given number doesn't exist, nothing will be removed but it will go through the process.
     * @param value - value of the binary search tree item to be removed
     */
    public remove(value: number) {
        this.root = removeItem(this.root, value);
    }

    /**
     * This function search for the given value. If it exists in tree return true, if not return false.
     * @param value - value to be found in the binary search tree.
     * @returns - true if the given value exists in the binary search tree, false if it doesn't exist.
     */
    public has(value: number): boolean {
        let temp = this.root;

        while (temp) {
            if (temp.val > value) {
                temp = temp.left;
            }
            else if (temp.val < value) {
                temp = temp.right;
            } else {
                return true;
            }
        }

        return false;
    }

    /**
     * This function uses the tree head to find the min value in tree.
     * @returns - the min value in the binary search tree. If no tree head returns undefined.
     */
    public getMin(): number | undefined {
        return this.root ? min(this.root) : undefined;
    }

    /**
     * This function uses the tree head to find the max value in tree.
     * @returns - the max value in the binary search tree. If no tree head returns undefined.
     */
    public getMax(): number | undefined {
        return this.root ? max(this.root) : undefined;
    }
}