# Priority Queue Package

This package provides an efficient implementation of a **Priority Queue** with two optimization strategies: **enqueue-optimized** and **dequeue-optimized**. The library is designed to be flexible and efficient, allowing developers to choose the optimization best suited to their use case.

## Features

- **Enqueue-Optimized**: Efficient enqueue operations for quickly adding elements.
- **Dequeue-Optimized**: Efficient dequeue operations for retrieving elements.
- Supports prioritization using a custom numeric priority for each element.
- Implements a modular design for extensibility and maintainability.

## Installation

```bash
npm install @ds/priority-queue
```

## Usage
Import the PQueue class and initialize it with the desired optimization strategy.

```ts
import { PQueue } from '@ds/priority-queue';

const pq = new PQueue({ optimization: 'dequeue' }); // Use 'enqueue' or 'dequeue' based on your needs.

pq.enQueue('Task1', 2);
pq.enQueue('Task2', 5);
pq.enQueue('Task3', 1);

console.log(pq.deQueue()); // Outputs: 'Task2' (highest priority)

```

## Options

The `PQueue` constructor accepts an `options` object to determine the optimization strategy. Here are the available options:

| Option         | Value                       | Description                                                                 |
|----------------|-----------------------------|-----------------------------------------------------------------------------|
| `optimization` | `"enqueue" \| "dequeue"` | Optimizes enqueue operations for faster insertion or optimizes dequeue operations for faster removal of the highest-priority item.|

By default, the optimization value is "enqueue" if not specified.

