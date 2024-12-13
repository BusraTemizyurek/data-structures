import { ListNode } from "./types";

export class Stack<P> {
  private dummy: ListNode<P> = {
    val: undefined,
  };

  private count = 0;

  peek(): P | undefined {
    return this.dummy.next?.val;
  }

  push(value: P) {
    this.count++;
    const newItem: ListNode<P> = {
      val: value,
    };

    if (!this.dummy.next) {
      this.dummy.next = newItem;
      return;
    }

    const temp = this.dummy.next;
    this.dummy.next = newItem;
    newItem.next = temp;
  }

  pop(): P | undefined {
    const temp = this.dummy.next;
    if (!temp) {
      return undefined;
    }

    this.dummy.next = temp.next;
    this.count--;

    return temp.val;
  }

  get size(): number {
    return this.count;
  }

  get isEmpty(): boolean {
    return !this.dummy.next;
  }
}
