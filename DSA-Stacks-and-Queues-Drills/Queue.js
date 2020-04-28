/* jshint strict: false */
/* jshint esversion: 6 */

// 6. Create a queue using Singly linked list
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }

        if (this.last) { 
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function peek(queue) {
    if (queue.first) 
        console.log(queue.first);
    else return console.log('Queue is empty');
}

function isEmpty(queue) {
    return console.log(!queue.first);    
}

function display(queue) {
    let node = queue.top;
    let order = 0;
    while (node !== null) {
        console.log(order, node.dada);
        order++;
        node = node.next;
    }
}

function remove(queue) {
    console.log('queue:', queue);
    let node = stack.top;
    let order = 0;
    while (node.data !== null) {
        console.log(order, node.data);
        order++;
        node = node.next;
        if (node.data !== item) {
            stack.push(node.data);
        }
    }
}

module.exports = {
    Queue,
    peek,
    isEmpty,
    display,
    remove
};