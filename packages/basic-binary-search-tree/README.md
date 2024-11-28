# Binary Search Tree (BST)

This package provides a TypeScript implementation of a Binary Search Tree (BST). A BST is a data structure where each node has at most two children referred to as left and right. The tree maintains the property that for any given node, its left children contain values less than the node's value, and its right children contain values greater than the node's value. This makes searching, insertion, and deletion operations efficient, typically with time complexity of O(log n).

## Features

This package supports the following operations:

1. **add**: Inserts a new value into the tree.
2. **remove**: Removes a value from the tree, adjusting the structure accordingly.
3. **has**: Checks if the value exists and returns true if exists or false if it doesn't.
4. **toArray**: Applies inorder traverse to the tree and return an array of values.
5. **getMin**: Retrieves the smallest value in the tree.
6. **getMax**: Retrieves the largest value in the tree.

## Installation

To install the package from npm, use the following command:

```
npm install basic-binary-search-tree
```

## Usage

### Importing the BinarySearchTree

```ts
import { BinarySearchTree } from 'basic-binary-search-tree';
```

### Creating a Tree and Adding Values

```ts
const bst = new BinarySearchTree();

bst.add(10);
bst.add(5);
bst.add(20);

console.log(bst.toArray()); // [5, 10, 20]
```

### Checking if Value Exists

```ts
console.log(bst.has(10)); // true
console.log(bst.has(15)); // false
```

### Removing a Value

```ts
bst.remove(10);
console.log(bst.toArray()); // [5, 20]
```

### Finding Minimum and Maximum Values

```ts
console.log(bst.getMin()); // 5
console.log(bst.getMax()); // 20
```

## Public API

### `add(value: number)`

- **Description**: Inserts a value into the BST. If the value already exists, it will not be added.
- **Parameters**: `value` (number) – The value to add to the tree.
- **Returns**: `void`.

### `toArray()`

- **Description**: Returns an array of all values in the tree, in ascending order.
- **Returns**: `number[]` – The sorted array of tree values.

### `remove(value: number)`

- **Description**: Removes a value from the tree, if it exists.
- **Parameters**: `value` (number) – The value to remove from the tree.
- **Returns**: `void`.

### `has(value: number)`

- **Description**: Searches for a value in the tree.
- **Parameters**: `value` (number) – The value to search for.
- **Returns**: `boolean` – `true` if the value exists, otherwise `false`.

### `getMin()`

- **Description**: Retrieves the minimum value in the tree.
- **Returns**: `number | undefined` – The minimum value, or `undefined` if the tree is empty.

### `getMax()`

- **Description**: Retrieves the maximum value in the tree.
- **Returns**: `number | undefined` – The maximum value, or `undefined` if the tree is empty.