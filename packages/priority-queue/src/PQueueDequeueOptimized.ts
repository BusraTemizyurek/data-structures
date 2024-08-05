import { IPQueue, ListNode } from "./types";

export class PQueueDequeueOptimized implements IPQueue {
    private dummy: ListNode = {
        val: "dummy",
        priority: Number.MAX_SAFE_INTEGER
    };

    enQueue(value: string, priority: number) {
        const item: ListNode = {
            val: value,
            priority
        };

        if (!this.dummy.next) {
            this.dummy.next = item;
            return;
        }

        let temp = this.dummy;
        while (temp && temp.next) {
            if (item.priority > temp.next.priority) {
                item.next = temp.next;
                temp.next = item;
                return;
            }
            temp = temp.next;
        }

        temp.next = item;
    }

    deQueue() {
        if (!this.dummy.next) {
            throw new Error("The list is empty");
        }

        const max: string | undefined = this.dummy.next.val;
        this.dummy.next = this.dummy.next.next;
        return max;
    }
}
