/* jshint strict: false */
/* jshint esversion: 6 */

class Memory {
    constructor() {
        this.memory = new Float64Array(1024);
        this.head = 0;
    }
  
    allocate(size) {
        if (this.head + size > this.memory.length) {
            return null;
        }
    
        let start = this.head;
    
        this.head += size;
        return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            return;
        }
    
        if (fromIdx > toIdx) {
            // Iterate forwards
            for (let i = 0; i < size; i++) {
            this.set(toIdx + i, this.get(fromIdx + i));
            }
        } else {
            // Iterate backwards
            for (let i = size - 1; i >= 0; i--) {
                this.set(toIdx + i, this.get(fromIdx + i));
            }
        }
    }
  
    get(ptr) {
        return this.memory[ptr];
    }
  
    set(ptr, value) {
        this.memory[ptr] = value;
    }
}

class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        this._resize(this.length + 1);
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
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3;
  
module.exports = Memory;

