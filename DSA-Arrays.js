// class Array {
//     constructor() {
//         this.length = 0; // initialize array w length 0
//         this.ptr = memory.allocate(this.length);
//     }

//     push(value) { // push new element to end of array
//         this._resize(this.length + 1); // use _resize method to resize array so there is space for the new item
//         memory.set(this.ptr + this.length, value); // set memory location of the item to be equal to the value
//         this.length++;
//     }

//     _resize(size) {
//         const oldPtr = this.ptr;
//         this.ptr = memory.allocate(size); // allocate a new larger chunk of memory for copying and pasting each item
//         if (this.ptr === null) {
//             throw new Error('Out of memory');
//         }
//         memory.copy(this.ptr, oldPtr, this.length); // copy each item of data to a new box, each time you resize the array
//         memory.free(oldPtr);
//         this._capacity = size;
//     }
// }

// This array allocates more space than needed ahead of time so any 
// items needed to be pushed into this array would produce 0(1) operations
class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
}

Array.SIZE_RATIO = 3; // 