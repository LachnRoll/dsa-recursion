/* jshint strict: false */
/* jshint esversion: 6 */

// 10. The Ophidian Bank
// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a 
// customer only if they have all of the appropriate paperwork. 
// Write a representation of this queue; 25% of the time (random), a customer's 
// paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.


const { Queue } = require('./Queue');
const queue = new Queue();

function tellerResponse(queue) {
    let hasPaperwork = Math.floor(Math.random() * 100);
  
    if (hasPaperwork > 25) {
      return queue.dequeue();
    }

    else {
      let noPaperwork = queue.dequeue();
      queue.enqueue(noPaperwork);
      return 'customer did not have paperwork';
    }
}

function ophidianBank() {
    const customers = new Queue();
    customers.enqueue('customer was served');
    customers.enqueue('customer was served');
    customers.enqueue('customer was served');
    customers.enqueue('customer was served');
    customers.enqueue('customer was served');

    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
    console.log(`${tellerResponse(customers)}`);
}

ophidianBank();
