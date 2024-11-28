import { BinarySearchTree } from "./binary-search-tree";
import { BstNode } from "./bst-node";

describe("Binary Search Tree", () => {
    it("add function adds item to tree", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        expect(x.toArray()).toStrictEqual([50, 75, 80, 100, 120, 125, 130]);
    });

    it("has function check if value exists", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        expect(x.has(180)).toBe(false);
        expect(x.has(120)).toBe(true);
    });

    it("getMin function returns min value", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        expect(x.getMax()).toBe(130);

        const y = new BinarySearchTree();
        expect(y.getMin()).toBe(undefined);
    });

    it("getMax function returns max value", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        expect(x.getMin()).toBe(50);

        const y = new BinarySearchTree();
        expect(y.getMax()).toBe(undefined);
    });

    it("remove function removes the given item", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        x.add(78);
        x.add(79);
        expect(x.toArray()).toStrictEqual([50, 75, 78, 79, 80, 100, 120, 125, 130]);

        x.remove(75);
        expect(x.toArray()).toStrictEqual([50, 78, 79, 80, 100, 120, 125, 130]);

        x.remove(50);
        expect(x.toArray()).toStrictEqual([78, 79, 80, 100, 120, 125, 130]);
        x.remove(79);
        expect(x.toArray()).toStrictEqual([78, 80, 100, 120, 125, 130]);

        x.remove(100);
        expect(x.toArray()).toStrictEqual([78, 80, 120, 125, 130]);
    });

    it("toArray function returns a number array of the tree values", () => {
        const x = new BinarySearchTree();
        x.add(100);
        x.add(75);
        x.add(125);
        x.add(50);
        x.add(80);
        x.add(120);
        x.add(130);
        expect(x.toArray()).toStrictEqual([50, 75, 80, 100, 120, 125, 130]);

        const y = new BinarySearchTree();
        expect(y.toArray()).toStrictEqual([]);
    })
})