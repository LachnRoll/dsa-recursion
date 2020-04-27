/* jshint strict: false */
/* jshint esversion: 6 */

// Queue is a data strucuture that is FIFO (First In First Out)
// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// We start by creating the constructor method for the queue. 
// The constructor will contain the 1st and the last nodes 
// indicating the beginning and the ending of the queue. 
// Initially, the queue is empty until we insert something into the queue.
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // Insertion is limited to only one place the end of the queue (enqueue)
    // Time complexity 0(1)
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    // Removal is limited to only one place the beginning of the queue (dequeue)
    // Time complexity 0(1)
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}