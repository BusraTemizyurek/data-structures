# Priority Queue Package

This package provides an efficient and flexible **Priority Queue** implementation. It supports two optimization strategies (**enqueue-optimized** and **dequeue-optimized**) and allows prioritization using either **minimum** or **maximum** priority.The library is designed to be flexible and efficient, allowing developers to choose the optimization best suited to their use case.

## Features

- **Optimization Strategies**:
  - **Enqueue-Optimized**: Efficient enqueue operations for quickly adding elements.
  - **Dequeue-Optimized**: Efficient dequeue operations for retrieving elements.
- **Priority Types**:
  - **Min-Priority**: Elements with the smallest priority value are dequeued first.
  - **Max-Priority**: Elements with the largest priority value are dequeued first.
- Supports prioritization using a custom numeric priority for each element.
- Implements a modular design for extensibility and maintainability.

## Installation

```bash
npm install ds-priority-queue
```

## Usage

Import the PQueue class and initialize it with the desired optimization strategy.

```ts
import { PQueue } from "ds-priority-queue";

// Initialize a priority queue with desired options
const pq = new PQueue({ optimization: "dequeue", type: "max" });
// 'type' can be 'min' or 'max' and 'optimization' can be enqueue or dequeue

// Add elements with priorities
pq.enQueue("Task1", 2);
pq.enQueue("Task2", 5);
pq.enQueue("Task3", 1);

// Retrieve the highest-priority element
console.log(pq.deQueue()); // Outputs: 'Task2' (highest priority)
```

Test

## Options

The `PQueue` constructor accepts an `options` object. Here are the available options:

| Option         | Type                     | Default     | Description                                                                               |
| -------------- | ------------------------ | ----------- | ----------------------------------------------------------------------------------------- |
| `optimization` | `"enqueue" \| "dequeue"` | `"enqueue"` | Determines whether enqueue or dequeue operations are optimized.                           |
| `type`         | `"min" \| "max"`         | `"max"`     | Specifies the priority type: `min` for smallest priority values first, `max` for largest. |
