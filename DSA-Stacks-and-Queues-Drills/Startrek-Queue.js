/* jshint strict: false */
/* jshint esversion: 6 */

// 6. Create a queue using Singly linked list
// Create a queue called starTrekQ and 
// add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// Implement a peek() function outside of the Queue class that
// lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that 
// allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class 
// that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

const { 
    Queue,
    peek,
    isEmpty,
    display,
    remove
} = require('./Queue');

function starTrek() {
    const voyager = new Queue();
    voyager.enqueue('Kirk');
    voyager.enqueue('Spock');
    voyager.enqueue('Uhura');
    voyager.enqueue('Sulu');
    voyager.enqueue('Checkov');

    peek(voyager);
    isEmpty(voyager);
    display(voyager);
    remove(voyager, 'Spock');
}

starTrek();