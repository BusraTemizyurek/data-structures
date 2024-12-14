import { Stack } from "./stack";

describe("Stack", () => {
  it("push adds items to the stack, and peek returns the top item", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.peek()).toBe(4);
  });

  it("size returns the correct number of items in the stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(5);

    expect(stack.size).toBe(4);
  });

  it("pop removes the top item from the stack and returns it, and peek reflects the new top item", () => {
    const stack = new Stack<number>();

    stack.push(2);
    stack.push(4);
    stack.push(6);
    stack.push(8);

    expect(stack.pop()).toBe(8);
    expect(stack.peek()).toBe(6);
    expect(stack.size).toBe(3);
  });

  it("isEmpty returns true when the stack is empty", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty).toBe(true);
  });

  it("isEmpty returns false when the stack has items", () => {
    const stack = new Stack<number>();

    stack.push(4);
    stack.push(6);
    stack.push(8);

    expect(stack.isEmpty).toBe(false);
  });

  it("pop on an empty stack returns undefined and does not change size", () => {
    const stack = new Stack<number>();

    expect(stack.pop()).toBeUndefined();
    expect(stack.size).toBe(0);
  });

  it("maintains the object reference", () => {
    interface MyObject {
      foo: string;
    }
    const stack = new Stack<MyObject>();

    const obj: MyObject = { foo: "bar" };

    stack.push(obj);

    expect(stack.pop()).toBe(obj);
  });
});
