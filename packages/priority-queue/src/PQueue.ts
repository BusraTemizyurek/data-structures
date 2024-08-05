import { PQueueDequeueOptimized } from "./PQueueDequeueOptimized";
import { PQueueEnqueuOptimized } from "./PQueueEnqueuOptimized";
import { IPQueue } from "./types";

export interface PQueueOptions {
    optimization: 'dequeue' | 'enqueue',
}

export class PQueue implements IPQueue {
    private readonly _internalQueue: IPQueue;

    constructor(options?: PQueueOptions) {
        if (options?.optimization === 'dequeue') {
            this._internalQueue = new PQueueDequeueOptimized();
        } else {
            this._internalQueue = new PQueueEnqueuOptimized();
        }
    }

    enQueue(value: string, priority: number): void {
        this._internalQueue.enQueue(value, priority);
    }

    deQueue(): string {
        return this._internalQueue.deQueue();
    }
}