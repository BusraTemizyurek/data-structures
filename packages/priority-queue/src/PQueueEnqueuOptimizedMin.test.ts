import { PQueueEnqueuOptimizedMin } from "./PQueueEnqueuOptimizedMin";

describe("PQueueDequeueOptimizedMin", () => {
  it("enQueue adds item in list", () => {
    const pq = new PQueueEnqueuOptimizedMin();

    pq.enQueue("A", 10);
    pq.enQueue("B", 15);
    pq.enQueue("C", 13);

    expect(pq.deQueue()).toBe("A");
    expect(pq.deQueue()).toBe("C");
    expect(pq.deQueue()).toBe("B");
  });

  it("enQueue adds item in list 2", () => {
    const pq = new PQueueEnqueuOptimizedMin();

    pq.enQueue("B", 15);
    pq.enQueue("C", 13);
    pq.enQueue("A", 10);

    expect(pq.deQueue()).toBe("A");
    expect(pq.deQueue()).toBe("C");
    expect(pq.deQueue()).toBe("B");
  });

  it("when 2 items with the same priority, later commer will be served later", () => {
    const pq = new PQueueEnqueuOptimizedMin();

    pq.enQueue("A", 10);
    pq.enQueue("B", 15);
    pq.enQueue("C", 13);
    pq.enQueue("D", 9);
    pq.enQueue("E", 10);
    pq.enQueue("F", 10);

    expect(pq.deQueue()).toBe("D");
    expect(pq.deQueue()).toBe("A");
    expect(pq.deQueue()).toBe("E");
    expect(pq.deQueue()).toBe("F");
    expect(pq.deQueue()).toBe("C");
    expect(pq.deQueue()).toBe("B");
  });

  it("when the list is empty", () => {
    const pq = new PQueueEnqueuOptimizedMin();

    expect(() => pq.deQueue()).toThrow("The list is empty");
  });
});
