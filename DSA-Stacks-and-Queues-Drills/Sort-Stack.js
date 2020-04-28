/* jshint strict: false */
/* jshint esversion: 6 */

// 5. Sort stack
// Write a program to sort a stack such that the smallest items are on the top 
// (in ascending order). You can use an additional stack, but you may not 
// use any other data structure (such as an array, or linked list).

const { 
    Stack,
    display
} = require('./Stack');

function sortStack(inputStack) {
    let tempInt = null;
    let tempStack = new Stack();
 
    if (inputStack.top === null) {
        inputStack = tempStack;
        return inputStack;
    }

    tempInt = inputStack.pop();
    if (tempStack.top === null || tempInt < tempStack.top.data) {
        tempStack.push(tempInt);
        return sortStack(inputStack, tempStack);
    } else {
        while (tempStack.top !== null && tempInt > tempStack.top.data) {
            inputStack.push(tempStack.pop());
        }
        tempStack.push(tempInt);
        return sortStack(inputStack, tempStack);
    }
}

const stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(5);
stack.push(1);
stack.push(2);

display(sortStack(stack));
