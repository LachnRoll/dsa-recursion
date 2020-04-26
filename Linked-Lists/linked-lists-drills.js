/* jshint strict: false */
/* jshint esversion: 6 */
class _Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(item) {
        this.head = new _NODE(item, this.head);
    }
    
    insertLast(item) {
        if (this.head === null) {
            this.inserFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.nex!== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _NODE();
        }
    }

    insertBefore(item, key) {
        if ((this.head === null) || (this.head.value === key)) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            while (currNode.next.value !== key) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(item, currNode.next);
        }
    }

    insertAfter(item, key) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        if (this.head.next === null) {
            this.insertLast(item);
        }
        else {
            let currNode = this.head;
            while (currNode.next.value !== key) {
                currNode = currNode.next;
            }
            currNode.next = _Node(item, currNode.next);
        }
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let currPos = 1;
            let currNode = this.head;
            let prevNode = this.head;
            while (currPos !== position) {
                prevNode = currNode;
                currNode = currNode.next;
                currPos++;
            }
            prevNode.next = new _Node(item, currNode);
        }
    }
    
    find(item) {
        let currNode = this.head;
    
        if (!this.head) {
            return null;
        }
    
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else { 
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNOde = this.head;
    
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

// CREATING A SINGLY LINKED LIST
function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');
}

// MYSTERY PROGRAM
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// This function takes an input linked list and removes all nodes with duplicate values
// The output will be a linked list with no nodes with duplicate values
// Time complexity is 0(n^2) because there is a while loop within a while loop

// REVERSE A LIST
class _Node2 {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList2 {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node2(item, this.head);
    }

    insertBefore(item, key) {
        if ((this.head === null) || (this.head.value === key)) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            while(currNode.next.value !== key) {
                currNode = currNode.next;
            }
            currNode.next = new_Node2(item, currNode.next);
        }
    }

    insertAfter(item, key) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        if (this.head.next === null) {
            this.insertLast(item);
        }
        else {
            let currNode = this.head;
            while(currNode.value !== key) {
                currNode = currNode.next;
            }
            currNode.next = new _Node2(item, currNode.next);
        }
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let currPosition = 1;
            let currNode = this.head;
            let prevNode = this.head;
            
            while(currPosition !== position) {
                prevNode = currNode;
                currNode = currNode.next;
                currPosition++;
            }
            prevNode.next = new _Node2(item, currNode);
        }
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node2(item, null);
        }
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head === item) {
            this.head = this.head.next;
        }
        let currNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        prevNode.next = currNode.next;
    }
}

const SLL = new LinkedList2();

function main2() {
    let SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhia');
    console.log(JSON.stringify(SLL, null, 2));
}

function reverseList(list) {
    let secondNode = null;
    let currNode = list.head;
    
    while (currNode !== null) {
        let firstNode = currNode.next;
        currNode.next = secondNode;
        secondNode = currNode;
        currNode = firstNode;
    }
    list.head = secondNode;
    console.log(JSON.stringify(list));
    return list;
}