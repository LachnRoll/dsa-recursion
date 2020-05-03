/* jshint strict: false */
/* jshint esversion: 6 */

// ====== Bubble Sort=======
// 1st, let's look at how not to do it. Bubble sort is the classic "terrible" sorting algorithm. 
// In bubble sort, you keep looping through an array to find out whether adjacent values need 
// swapping, and you keep going until there are no more values that need swapping:
function swap(array, i, j) {
    console.log('array in swap', array);
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
}

// ====== Merge Sort=======
// Merge sort takes a divide and conquer approach to sorting. It breaks the array into 
// continually smaller chunks, then merges them back together in the correct order:
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    console.log('left:', left);
    console.log('right:', right);
    
    return merge(left, right, array);
}

// If the array has 1 or 0 elements, then it is by definition sorted, so you can 
// return the array itself. Otherwise, you slice the array into 2 halves and sort 
// each half by recursively calling mergeSort.  The 2 sorted halves are then merged 
// together in the correct order using the merge function:

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
        console.log('leftIndex:', array[outputIndex]);
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
        console.log('rightIndex:', array[outputIndex]);
    }
    return array;
}
// best, average, and worst-case performance of O(nlog(n))

// ====== QuickSort=======
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log('middle', middle);
    
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}
// Quicksort again uses a divide and conquer approach. You partition the array into 
// 2 halves around a pivot value. All of the values which are less than the pivot 
// value go to 1 half of the array, and all of the values which are greater than 
// the pivot go to the other half of the array. You then recursively sort the 2 
// halves of the array until the halves are of length 0 or 1.
// There are different partitioning algorithms. 
// A common in-place algorithm is Lomuto's algorithm:
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
}
// The pivot is the final value in the array. You loop through the array, swapping 
// values as you go to put them on either side of the pivot point. And finally, you 
// put the pivot into the correct place in the array.
// best and average-case performance O(nlog(n))
// worst case O(n^2)

const mergeSample = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
console.log(mergeSort(mergeSample));

const qsSample = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
console.log('quick sorted', quickSort(qsSample));

// 3. Implementing quicksort
function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}

// 4. Implementing merge sort
const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7,46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
console.log(qSort(array));

function mSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }   
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    left = mSort(left);
    right = mSort(right);
    return merge(left, right, arr);
}

console.log('mSort:', mSort(array));

// 5. Sorting a linked list using merge sort
// const LinkedList = require('../DSA-Linked-Lists/linked-lists');
const ll = new LinkedList();
for (let i = 0; i < array.length; i++) {
    ll.insertLast(array[i]);
}
console.log(ll.mSort());

// Bucket Sort
function bucketSort(arr, highest, lowest) {
    let bucket1 = [];
    let bucket2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < (highest + lowest) / 2) {
            bucket1.push(arr[i]);
        } else {
            bucket2.push(arr[i]);
        }
    }

    mSort(bucket1);
    mSort(bucket2);
    return bucket1.concat(bucket2);
}

console.log(bucketSort(array, 98, 1));

// 7. Sort in place
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randomIdx = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[randomIdx];
        arr[randomIdx] = temp;
    }
    return arr;
}
let shuffle = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16];
console.log('shuffle array', shuffleArray(shuffle));

// 8. Sorting Books
function sortBooks(str1, str2, charIndex = 0) {
    if (str1 === str2) {
        return true;
    }
    if (str1.toLowerCase().charCodeAt([charIndex]) < str2.toLowerCase().charCodeAt([charIndex])) {
        return true;
    }
    else if (str1.toLowerCase().charCodeAt([charIndex]) > str2.toLowerCase().charCodeAt([charIndex])) {
        return false;
    }
    else {
        return sortBooks(str1, str2, charIndex + 1);
    }
}

function sortStrings(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = sortStrings(left);
    right = sortStrings(right);
    return mergeStrings(left, right, arr);
}

function mergeStrings(left, right, arr) {
    let leftIdx = 0;
    let rightIdx = 0;
    let output = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (sortBooks(left[leftIdx], right[rightIdx])) {
            arr[output++] = left[leftIdx++];
        } else {
            arr[output++] = right[rightIdx++];
        }
    }

    for (let i = leftIdx; i < left.length; i++) {
        arr[output++] = left[i];
    }
    for (let i = rightIdx; i < right.length; i++) {
        arr[output++] = right[i];
    }
    return arr;
}

const books = [
    'Gone With the Wind',
    'Lolita',
    'Leaves of Grass',
    'On the Road',
    'Walden',
    'Davinci Code',
    'Dark Tower'
];
console.log(sortStrings(books));
