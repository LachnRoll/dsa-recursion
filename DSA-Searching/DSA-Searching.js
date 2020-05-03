/* jshint strict: false */
/* jshint esversion: 6 */

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using 
// the recursive binary search algorithm, identify the sequence of 
// numbers that each recursive call will search to try and find 8.

// Looks at middle of the array, which will give it 12. 8 is less than 12,
// so it will go to the middle of the lower half giving it 6.  8 is more
// than 6, so it will find the middle point between 6 and 12 giving it 8.

// 2. Adding a React UI
// dsa-searching-app

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. 
// How would you go about it? Can you express this process as a search algorithm? 
// Implement your algorithm to find a book whose Dewey and book title is provided.

function findBook(dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? dewey.length : end;

    if (start > end) {
        return 'Book not found';
    }
    const index = Math.floor((start + end) / 2);
    const item = dewey[index];

    for (let i = 0; i < dewey.length; i++) {
        if (dewey[i] == title) {
            return `Found ${title}`;
        }
    }

    if (item < dewety) {
        return findBook(dewey, title, index + 1, end);
    } else if (item > dewey) {
        return findBook(dewey, title, start, index - 1);
    }
}

// 5. Implement different tree traversals

const Queue = require('../DSA-Stacks-and-Queues-Drills/Queue')
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        } 
        else if (key < this.key && this.left) {
            return this.left.find(key);
        } 
        else if (key > this.key && this.right) {
            return this.right.find(key);
        } 
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            } 
            else if (this.left) {
                this._replaceWith(this.left);
            } 
            else if (this.right) {
                this._replaceWith(this.right);
            } 
            else {
                this._replaceWith(null);
            }            
        } 
        else if (key < this.key && this.left) {
            this.left.remove(key);
        } 
        else if (key > this.key && this.right) {
            this.right.remove(key);
        } 
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            } 
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    inOrder(values = []) {
        // in order: L - Current - R
        if (this.left) {
            values = this.left.inOrder(values);
        }
        values.push(this.value);
        if (this.right) {
            values = this.right.inOrder(values);
        }
        return values;
    }

    preorder(values = []) {
        // preorder: Current - L - R
        values.push(this.value);
        if (this.left) {
            values = this.left.preorder(values);
        } 
        if (this.right) {
            values = this.right.preorder(values);
        }
        return values;
    }

    postOrder(values = []) {
        // post order: L - R - Current
        if (this.left) {
            values = this.left.postOrder(values);
        } 
        if (this.right) {
            values = this.right.postOrder(values);
        }
        values.push(this.value);
        return values;
    }

    commandOrder(root) {
        if (!root.value) {
            return [];
        }
        const queue = new Queue();
        queue.enqueue(root);
        let order = [];
        while (queue.first) {
            let node = queue.dequeue();
            order.push(node.value);
            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }
        return order;
    }
}

function treeTraversals() {
    const bst = new BinarySearchTree();
    let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
    data.forEach(num => bst.insert(num, num));
    console.log('preOrder:', bst.preorder());
    console.log('inOrder:', bst.inOrder());
    console.log('postOrder:', bst.postOrder());
}

treeTraversals();

// 6. Find the next commanding officer
function ussEnterprise() {
    const ussEnterprise = new BinarySearchTree();

    let officers = [
        {key: 5, name: 'Cpt. Picard'},
        {key: 3, name: 'Cmdr. Riker'},
        {key: 2, name: 'Lt. Cmdr. Worf'},
        {key: 4, name: 'Lt. Cmdr. LaForge'},
        {key: 1, name: 'Lt. sec-officer'},
        {key: 6, name: 'Cmdr. Data'},
        {key: 8, name: 'Lt. Cmdr. Crusher'},
        {key: 7, name: 'Lt. Selar'},
    ];

    officers.forEach(officer => {
        ussEnterprise.insert(officer.key, officer.name);
    });
    return ussEnterprise.commandOrder(ussEnterprise);
}

console.log(ussEnterprise());
// ['Cpt. Picard',
//   'Cmdr. Riker',
//   'Cmdr. Data',
//   'Lt. Cmdr. Worf',
//   'Lt. Cmdr. LaForge',
//   'Lt. Cmdr. Crusher',
//   'Lt. sec-officer',
//   'Lt. Selar'
// ]

function maxProfit(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] - arr[i];
            }
        }
    }
    return max;
}
const stock = [128, 97, 121, 123, 98, 97, 105];
console.log(maxProfit(stock)); // 26


module.exports = {
    BinarySearchTree
};