export interface ListNode {
    val: string,
    priority: number,
    next?: ListNode
}



export interface IPQueue {
    enQueue(value: string, priority: number): void;
    deQueue(): string
}