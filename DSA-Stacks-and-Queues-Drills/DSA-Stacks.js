/* jshint strict: false */
/* jshint esversion: 6 */

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

// We start with an empty 1st node, represented by null 
// and this indicates the top of the stack.
// Stacks operate on a LILO (Last In Last Out)
// A stack has 2 primary functions:
// push(): places data onto the top of a stack
// pop(): removes data from the top of the stack

class Stack {
    constructor() {
        this.top = null;
    }

    // Since we are only adding to the top of the stack, 
    // the time complexity of inserting on a stack is constant, O(1).
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }


    // Removal from a stack is also limited to the top of the stack and is called "pop". 
    // Since we are removing only from the top of the stack, the time complexity 
    // of removing an item from a stack is constant, O(1).
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
