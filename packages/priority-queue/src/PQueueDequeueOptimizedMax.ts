import { PQueueDequeueOptimized } from "./PQueueDequeueOptimized";

export class PQueueDequeueOptimizedMax extends PQueueDequeueOptimized {
  constructor() {
    super(Number.MAX_SAFE_INTEGER);
  }
  compare(p1: number, p2: number) {
    return p1 > p2;
  }
}
