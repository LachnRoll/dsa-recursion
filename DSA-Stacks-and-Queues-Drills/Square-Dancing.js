/* jshint strict: false */
/* jshint esversion: 6 */

// 9. Square dance pairing
// As people come to the dance floor, they should be paired off as quickly 
// as possible: man with woman, man with woman, all the way down the line. 
// If several men arrive in a row, they should be paired in the order they came, 
// and likewise if several women do. Maintain a queue of "spares" (men for whom 
// you have no women yet, or vice versa), and pair them as appropriate.

// F Jane
// M Frank
// M John
// M Sherlock
// F Madonna
// M David
// M Christopher
// F Beyonce

const { Queue } = require('./Queue');
const queue = new Queue();

queue.enqueue({
    gender: 'F',
    name: 'Jane'
});

queue.enqueue({
    gender: 'M',
    name: 'Frank'
});

queue.enqueue({
    gender: 'M',
    name: 'John'
});

queue.enqueue({
    gender: 'M',
    name: 'Sherlock'
});

queue.enqueue({
    gender: 'F',
    name: 'Madonna'
});

queue.enqueue({
    gender: 'M',
    name: 'David'
});

queue.enqueue({
    gender: 'M',
    name: 'Christopher'
});

queue.enqueue({
    gender: 'F',
    name: 'Beyonce'
});

function pairPartners(queue) {
    const men = new Queue();
    const women = new Queue();

    while (queue.last !== null) {
        const next = queue.dequeue();
        if (next.gender === 'F') {
            women.enqueue(next.name);
        } else men.enqueue(next.name);
    }

    while (women.last !== null && men.last !== null) {
        console.log(women.dequeue() + ' will dance with ' + men.dequeue());
    }

    if (women.last !== null) {
        console.log(`There ${count(women)} are women left to dance.`);
    }

    if (men.last !== null) {
        console.log(`There are ${count(men)} men left to dance.`);
    }
}

function count(queue) {
    if (queue.last === null) {
        return 0;
    }
    let counter = 1;
    let node = queue.first;

    while (node.next !== null) {
        counter++;
        node = node.next;
    }
    return counter;
}

pairPartners(queue);