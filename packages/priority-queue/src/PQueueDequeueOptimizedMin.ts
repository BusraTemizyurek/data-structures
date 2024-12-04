import { PQueueDequeueOptimized } from "./PQueueDequeueOptimized";

export class PQueueDequeueOptimizedMin extends PQueueDequeueOptimized {
  constructor() {
    super(Number.MIN_SAFE_INTEGER);
  }
  compare(p1: number, p2: number) {
    return p2 > p1;
  }
}
