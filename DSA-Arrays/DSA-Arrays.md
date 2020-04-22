2. Explore the push() method
function main(){

    Array.SIZE_RATIO = 3;

    Create an instance of the Array class
    let arr = new Array();

    Add an item to the array
    arr.push(3);

    console.log(arr);
}

What is the length, capacity and memory address of your array?
length = 1  capacity = 3  memory (ptr) = 0

Add the following in the main function and then print the array:
arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);

What is the length, capacity and memory address of your array? 
Explain the result of your program after adding the new lines of code.

length = 6, length is the number of items pushed into the array

capacity = 12, 
    -started at 0 
    -added 1 item
    -increased it by length(0) + 1 * SIZE_RATION(3) => 3
    -when 4th was pushed, the array ran out of space
    -increased it by length(3) + 1 * SIZE_RATION(3) => 12

memory (ptr) = 3
    -started at 0
    -when 4th item was pushed the array ran out of space
    -realocated memory to next available free memory address/block, which was 3
    -array now occupies address ptr(3) - ptr + capacity 1(14)


3. Exploring the pop() method
  arr.pop();
  arr.pop();
  arr.pop();

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

length = 3, changed the length of the array only, meaning we are not tracking any data between the length and the capacity

capacity = 12, length decreased, so length will not exceed the capacity, do not need to increase capacity.

memory (ptr) = 3, did not need to realocate memory

4. Understanding more about how arrays work
Print the 1st item in the array arr.

Empty the array and add just 1 item: arr.push("tauhida");

Print this 1 item that you just added. What is the result? Can you explain your result?

Result: It prints NaN, because we are trying to add a string to an array that only accepts numbers.

What is the purpose of the _resize() function in your Array class?
It resizes the array so theere is space for new items.

5. URLify a string
Input: tauhida parveen
Output: tauhida%20parveen
Input: www.thinkful.com /tauh ida parv een
Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function URLify(str) {
    let output = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '') {
            output.push('%20')
        } else {
            output.push(strp[i])
        }
        return output.join('')
    }
}
0(n) Linear Time

6. Filtering an array
Write an algorithm to remove all numbers less than 5 from the array. 

function filterLessThan(arr) {
    let output = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= 5) {
            output.push(arr[i])
        }
    }
    return output;
}
0(n)

7. Max sum in the array
Input: [4, 6, -3, 5, -2, 1]
Output: 12

function findMaxSum(arr) {
    let currentSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum = arr[i]
        for (let j = i+1; j < arr.length; j ++) {
            currentSum += arr[j];
            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }
    }
    return maxSum;
}
O(n^2)

8. Merge Arrays
Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArrays(x, y) {
    let result = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (x.length + y.length)) {
        let depleted1 = (index1 >= x.length)
        let depleted2 = (index2 >= y.length)

        if (!depleted1 && (depleted2 || (x[index1] < y[index2]))) {
            result.push(x[index1])
            index1++
        } else {
            result.push(y[index2]);
            index2++
        }
        current++;
    }
    return result;
}
mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])
O(n)

9. Remove Characters
Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeCharacters(string, chars) {
    let result = '';
    for (let i =0; i < string.length; i++) {
        let contained = true;
        for (let j = 0; j < chars.length; j++) {
            if (string[i] === chars[j]) {
                contained = false;
            }
        }
        if (contained) {
            result += string[i]
        }
    }
    return result;
}
removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
O(n^2)

10. Products
Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.
Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]

function products(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j]
            }
        }
        result.push(product)
    }
    return result;
}

products([1, 3, 9, 4])

11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];

function twoDee(arr) {
    let result = [];
    let rowCheck = [];
    let columnCheck = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                rowCheck[i] = true;
                columnCheck[j] = true;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (!result[i]) {
            result[i] = [];
        }
        for (let j = 0; j < arr[0].length; j++) {
            if (rowCheck[i] || columnCheck[j]) {
                result[i][j] = 0;
            } else {
                result[i][j] = 1;
            }
        }
    }
    return result;
}
0(n^2)

12. String Rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
Input: amazon, azonma
Output: False
Input: amazon, azonam
Output: true

function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let doubleStr1 = str1 + str1;

    if (doubleStr1.indexOf(str2) === -1) {
        return false;
    } else {
        return true;
    }
}
stringRotation('amazon', 'azonam');
0(n)