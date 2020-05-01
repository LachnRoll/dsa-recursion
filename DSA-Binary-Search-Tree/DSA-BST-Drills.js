/* jshint strict: false */
/* jshint esversion: 6 */

// 3. Create a BST class
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
}

function numberBinaryTree() {
    let bst = new BinarySearchTree();
    const numbers = [3, 1, 5, 6, 9, 2, 5, 7];
    numbers.forEach(number => bst.insert(number));
    return bst;
}

function letterBinaryTree() {
    let bst = new BinarySearchTree();
    const letters =  ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
    letters.forEach(letter => bst.insert(letter));
    return balancedTree;
}

console.log(numberBinaryTree());
console.log(letterBinaryTree());
// These are only returning results that are 3 levels deep. 
// The first BST is stops at 6 and the second BST at Q.

// 4. What does this program do?
// This function returns the sum of each number on the tree
// t.value was null so it was returning NaN.
// t.key returned the correct result.
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.key + tree(t.right);
}

console.log(tree(numberBinaryTree())); // 38

// 5. Height of a BST
function findHeight(tree) {
    if (!tree) {
        return 0;
    }
    // only has one key
    if (!tree.left && !tree.right) {
        return 1;
    }
    // create a variable to compare right and left height
    let height = 0;
    // use recursive function to loop through each side
    // add 1 for each branch layer and store in height
    if (tree.right) {
        let treeRight = 1 + findHeight(tree.right);
        if (treeRight > height) 
        height = treeRight;
    }
    if (tree.left) {
        let treeLeft = 1 + findHeight(tree.left);
        if (treeLeft > height) 
        height = treeLeft;
    }
    return height;
}

console.log(findHeight(numberBinaryTree()));

// 6. Is it a BST?
function isItABst(tree) {
    if (!tree) {
        return false;
    }
    // right branch must be more than parent key
    // recursive function to keep going down the branches
    if (tree.right) {
        if (tree.right.key > tree.key) {
            isItABst(tree.right);
        } else {
            return false;
        }
    }
    // left branch must be less than parent key
    // recursive function to keep going down the branches
    if (tree.left) {
        if (tree.left.key < tree.key) {
            isItABst(tree.left);
        } else {
            return false;
        }
    }
    // all conditions pass
    return true;
}
console.log(isItABst(numberBinaryTree()));

// 7. 3rd largest node
function thirdLargestNode(tree) {
    const height = findHeight(tree);
    // any height less than 2 will not have 3 nodes
    if (height < 2) {
        return 'Less than 3 nodes';
    } 
    // minimum height is 2 for 3 nodes. 1 node on each side.
    // left is the smallest node of the 3
    else if (height < 3) {
        if (tree.left && tree.right) {
            return tree.left.value;
        } else return 'Less than 3 nodes';
    }
    // if height is more than 3 scale down right side for larger numbers.
    else if (height > 3) {
        return thirdLargestNode(tree.right);
    } else return tree.key;
}

console.log(thirdLargestNode(numberBinaryTree())); // 6

// 8. Balanced BST
function isBstBalanced(tree) {
    if (!tree) {
        return false;
    }
    if (!tree.left && !tree.right) {
        return true;
    }
    if (Math.abs(findHeight(tree.right) - findHeight(tree.left)) > 1) {
        return false;
    }
    return true;
}
console.log(isBstBalanced(numberBinaryTree()));

// 9. Are they the same BSTs?
function areTheyTheSameBst(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
        return false;
    }
    if (arr1.length === 0 || arr2.length === 0) return true;

    const higher1 = [];
    const lower1 = [];
    const higher2 = [];
    const lower2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr1[0]) {
            higher1.push(arr1[i]);
        } else {
            lower1.push(arr1[1]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > arr2[0]) {
            higher2.push(arr2[i]);
        } else {
            lower2.push(arr2[i]);
        }
    }

    return areTheyTheSameBst(higher1, higher2) && areTheyTheSameBst(lower1, lower2);
}

const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];
console.log(areTheyTheSameBst(arr1, arr2));

module.exports = BinarySearchTree;