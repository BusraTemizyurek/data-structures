import { IPQueue, ListNode } from "./types";

export abstract class PQueueDequeueOptimized implements IPQueue {
  protected dummy: ListNode;

  constructor(initialPriority: number) {
    this.dummy = {
      val: "dummy",
      priority: initialPriority,
    };
  }

  enQueue(value: string, priority: number) {
    const item: ListNode = {
      val: value,
      priority,
    };

    if (!this.dummy.next) {
      this.dummy.next = item;
      return;
    }

    let temp = this.dummy;
    while (temp && temp.next) {
      if (this.compare(item.priority, temp.next.priority)) {
        item.next = temp.next;
        temp.next = item;
        return;
      }
      temp = temp.next;
    }

    temp.next = item;
  }

  abstract compare(p1: number, p2: number): boolean;

  deQueue() {
    if (!this.dummy.next) {
      throw new Error("The list is empty");
    }

    const max: string | undefined = this.dummy.next.val;
    this.dummy.next = this.dummy.next.next;
    return max;
  }
}
