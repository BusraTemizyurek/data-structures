import { PQueueEnqueuOptimized } from "./PQueueEnqueuOptimized";

export class PQueueEnqueuOptimizedMax extends PQueueEnqueuOptimized {
  constructor() {
    super(Number.MAX_SAFE_INTEGER);
  }

  compare(p1: number, p2: number): boolean {
    return p1 > p2;
  }
}
