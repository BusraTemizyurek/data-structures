import { PQueueEnqueuOptimizedMin } from "./PQueueEnqueuOptimizedMin";
import { PQueueEnqueuOptimizedMax } from "./PQueueEnqueuOptimizedMax";
import { IPQueue } from "./types";
import { PQueueDequeueOptimizedMin } from "./PQueueDequeueOptimizedMin";
import { PQueueDequeueOptimizedMax } from "./PQueueDequeueOptimizedMax";

export interface PQueueOptions {
  optimization: "dequeue" | "enqueue";
  type?: "min" | "max";
}

export class PQueue implements IPQueue {
  private readonly _internalQueue: IPQueue;

  constructor(options?: PQueueOptions) {
    if (options?.optimization === "dequeue") {
      this._internalQueue =
        options?.type === "min"
          ? new PQueueDequeueOptimizedMin()
          : new PQueueDequeueOptimizedMax();
    } else {
      this._internalQueue =
        options?.type === "min"
          ? new PQueueEnqueuOptimizedMin()
          : new PQueueEnqueuOptimizedMax();
    }
  }

  enQueue(value: string, priority: number): void {
    this._internalQueue.enQueue(value, priority);
  }

  deQueue(): string {
    return this._internalQueue.deQueue();
  }
}
