import { IPQueue, ListNode } from "./types";

export class PQueueEnqueuOptimized implements IPQueue {
    private dummy: ListNode = {
        val: "dummy",
        priority: Number.MAX_SAFE_INTEGER
    };
    private tail = this.dummy;

    enQueue(value: string, priority: number) {
        const item: ListNode = {
            val: value,
            priority
        };

        this.tail.next = item;
        this.tail = item;
    }

    deQueue() {
        if (!this.dummy.next) {
            throw new Error("The list is empty");
        }

        let temp: ListNode | undefined = this.dummy.next;
        let max: ListNode | undefined = temp;
        let preMax: ListNode | undefined = this.dummy;

        while (temp && temp.next) {
            if (temp.next.priority > max.priority) {
                max = temp.next;
                preMax = temp;
            }
            temp = temp.next;
        }

        preMax.next = max.next;

        return max.val;
    }
}
