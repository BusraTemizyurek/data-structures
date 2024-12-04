import { PQueueEnqueuOptimized } from "./PQueueEnqueuOptimized";

export class PQueueEnqueuOptimizedMin extends PQueueEnqueuOptimized {
  constructor() {
    super(Number.MIN_SAFE_INTEGER);
  }

  compare(p1: number, p2: number): boolean {
    return p2 > p1;
  }
}
