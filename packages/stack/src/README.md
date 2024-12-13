# Stack Package

A lightweight, TypeScript-based implementation of a stack data structure, providing standard stack operations like `push`, `pop`, `peek`, size checking, and emptiness validation.

## Installation

Install the package via npm:

```bash
npm install basic-stack
```

or with Yarn:

```bash
yarn add basic-stack
```

## Usage

### Importing the Stack Class

```typescript
import { Stack } from "basic-stack";
```

### Creating a Stack

You can create a stack for any data type:

```typescript
const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

interface MyObject {
  id: number;
  name: string;
}
const objectStack = new Stack<MyObject>();
```

### API Methods

#### `push(value: T): void`

Adds an item to the top of the stack.

```typescript
numberStack.push(42);
numberStack.push(36);
```

#### `pop(): T | undefined`

Removes and returns the top item of the stack. Returns `undefined` if the stack is empty.

```typescript
const top = numberStack.pop(); // 36
```

#### `peek(): T | undefined`

Returns the top item of the stack without removing it. Returns `undefined` if the stack is empty.

```typescript
const top = numberStack.peek(); // 42
```

#### `size: number`

Returns the number of items in the stack.

```typescript
console.log(numberStack.size); // 1
```

#### `isEmpty: boolean`

Returns `true` if the stack is empty, `false` otherwise.

```typescript
console.log(numberStack.isEmpty); // false
```

## Example

```typescript
import { Stack } from "@your-username/stack";

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.size); // 3
console.log(stack.pop()); // 30
console.log(stack.size); // 2
console.log(stack.isEmpty); // false

stack.pop();
stack.pop();

console.log(stack.isEmpty); // true
```

## Features

- Generic type support for flexibility.
- Implements core stack operations: `push`, `pop`, `peek`.
- Properties for size checking and emptiness validation.
- Maintains object references for complex data types.
