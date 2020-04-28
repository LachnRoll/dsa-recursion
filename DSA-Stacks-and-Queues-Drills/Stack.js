/* jshint strict: false */
/* jshint esversion: 6 */

// 1. Create a stack class
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    return console.log(`Top: ${stack.top.data}`, `Top.next: ${stack.top.next.data}`);
}

function isEmpty(stack) {
    return console.log(!stack.top);
}

function display(stack) {
    let node = stack.top;
    let order = 0;
    while (node !== null) {
        console.log(order, node.data);
        order++;
        node = node.next;
    }
}

function remove(stack, item) {
    console.log('stack:', stack);
    let node = stack.top;
    let order = 0;
    while (node.data !== null) {
        console.log(order, node.data);
        order++;
        node = node.next;
        if (node.data !== item) {
            stack.push(node.data);
        }
        // stack.pop();
    }
    console.log(stack);
}

module.exports = {
    _Node,
    Stack,
    peek,
    isEmpty,
    display,
    remove
};
