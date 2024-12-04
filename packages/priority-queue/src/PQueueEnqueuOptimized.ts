import { IPQueue, ListNode } from "./types";

export abstract class PQueueEnqueuOptimized implements IPQueue {
  protected dummy: ListNode;
  private tail: ListNode;

  constructor(initialPriority: number) {
    this.dummy = {
      val: "dummy",
      priority: initialPriority,
    };
    this.tail = this.dummy;
  }

  enQueue(value: string, priority: number) {
    const item: ListNode = {
      val: value,
      priority,
    };

    this.tail.next = item;
    this.tail = item;
  }

  abstract compare(p1: number, p2: number): boolean;

  deQueue(): string {
    if (!this.dummy.next) {
      throw new Error("The list is empty");
    }

    let temp: ListNode | undefined = this.dummy.next;
    let max: ListNode | undefined = temp;
    let preMax: ListNode | undefined = this.dummy;

    while (temp && temp.next) {
      if (this.compare(temp.next.priority, max.priority)) {
        max = temp.next;
        preMax = temp;
      }
      temp = temp.next;
    }

    preMax.next = max.next;

    return max.val;
  }
}
