/******************************************************************************

Functionalities
    1. push - arr.append("item")
    2. pop - arr.pop()
    3. top - arr[-1]
    4. size - arr.length
    5. isEmpty - true if arr.length < 1 else false

*******************************************************************************/


class Stack {
    #data = [];      // array must be private
    push(item) {
        this.#data.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty!!");
            return;
        }
        return this.#data.pop();
    }
    top() {
        if (this.isEmpty()) {
            console.log("Stack is Empty!!");
            return;
        }
        return this.#data.at(-1);
    }
    size() {
        return this.#data.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}


class Stack2 {  // with constructor for initialization logic, setting properties based on arguments passed to the constructor args
    #data;      // array must be private
    #capacity;

    constructor(capacity) {
        if (capacity <= 0) {
            throw new Error("Capacity must be a positive number.");
        }
        this.#data = [];
        this.#capacity = capacity;
    }
    push(item) {
        if (this.size() === this.#capacity) {
            throw new Error("Maximum size limit reached");
        }
        this.#data.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty!!");
            return;
        }
        return this.#data.pop();
    }
    top() {
        if (this.isEmpty()) {
            console.log("Stack is Empty!!");
            return;
        }
        return this.#data.at(-1);
    }
    size() {
        return this.#data.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}



const stack_obj = new Stack();

console.log("isEmpty", stack_obj.isEmpty(), "\n");

stack_obj.push(10);
console.log("isEmpty", stack_obj.isEmpty());
console.log("size", stack_obj.size());
console.log("top", stack_obj.top(), "\n");

console.log("pop", stack_obj.pop());
console.log("isEmpty", stack_obj.isEmpty());
