import { PQueueEnqueuOptimized } from "./PQueueEnqueuOptimized";

describe("PQueueDequeueOptimized", () => {
    it("enQueue adds item in list", () => {
        const pq = new PQueueEnqueuOptimized();

        pq.enQueue("A", 10);
        pq.enQueue("B", 15);
        pq.enQueue("C", 13);

        expect(pq.deQueue()).toBe("B");
        expect(pq.deQueue()).toBe("C");
        expect(pq.deQueue()).toBe("A");

    })

    it("enQueue adds item in list 2", () => {
        const pq = new PQueueEnqueuOptimized();

        pq.enQueue("B", 15);
        pq.enQueue("C", 13);
        pq.enQueue("A", 10);

        expect(pq.deQueue()).toBe("B");
        expect(pq.deQueue()).toBe("C");
        expect(pq.deQueue()).toBe("A");
    })

    it("when 2 items with the same priority, later commer will be served later", () => {
        const pq = new PQueueEnqueuOptimized();

        pq.enQueue("A", 10);
        pq.enQueue("B", 15);
        pq.enQueue("C", 13);
        pq.enQueue("D", 9);
        pq.enQueue("E", 10);
        pq.enQueue("F", 10);


        expect(pq.deQueue()).toBe("B");
        expect(pq.deQueue()).toBe("C");
        expect(pq.deQueue()).toBe("A");
        expect(pq.deQueue()).toBe("E");
        expect(pq.deQueue()).toBe("F");
        expect(pq.deQueue()).toBe("D");

    })

    it("when the list is empty", () => {
        const pq = new PQueueEnqueuOptimized();

        expect(() => pq.deQueue()).toThrow("The list is empty");
    })
})