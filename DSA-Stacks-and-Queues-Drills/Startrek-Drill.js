/* jshint strict: false */
/* jshint esversion: 6 */

// 1. Create a stack called starTrek and add 
// Kirk, Spock, McCoy, and Scotty to the stack.

// 2. Useful methods for a stack 
// Implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
// Remove McCoy from your stack and display the stack
const {
    Stack,
    peek,
    isEmpty,
    display,
    remove
} = require('./Stack');

function starTrek() {
    const starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    peek(starTrek);
    isEmpty(starTrek);
    display(starTrek); // first item is Scotty
    remove(starTrek, 'McCoy');
}

starTrek();
