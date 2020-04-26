/* jshint strict: false */
/* jshint esversion: 6 */

// 1. Counting Sheep
// What is the input to the program?
// Input is 3
// What is the output of the program?
// Output is to log "Another sheep jumped over the fence."
// What is the input to each recursive call?
// Input is input number - 1
// What is the output of each recursive call?
// Output is to log "Another sheep jumped over the fence." 
// until the input has reached 0, which then logs "All sheep jumped over the fence"

const countingSheep = function(numOfSheep) {
    if (numOfSheep === 0) {
        console.log('All sheep jumped over the fence'); 
    } else {
        console.log('Another sheep jumped over the fence.'); // output
        return countingSheep(numOfSheep - 1); // changes each recursive call by -1
    }
}

let numOfSheep = 3; // input to the program
countingSheep(numOfSheep);

// ========================================================
// 2. Power Calculator
// What is the input to the program?
// 10 is the base, 2 is the exponent
// What is the output of the program?
// 100
// What is the input to each recursive call?
// base, exponent - 1
// What is the output of each recursive call?
// base * base

const powerCalculator = function(base, expo) {
    if (expo < 0) {
        return "exponent should be >= 0";
    } else if (expo === 0) {
        return 1;
    }
    else {
        return base * powerCalculator(base, expo-1);
    }
}

console.log(powerCalculator(10, 2));

// ========================================================
// 3. Reverse String
// What is the input to the program?
// 'hello world'
// What is the output of the program?
// 'dlrow olleh'
// What is the input to each recursive call?
// Each time the first letter of each input should be cut while 
// simultaneously added to the end of the word
// What is the output of each recursive call?
// The first letter of the string is taken out, then added to the end

const reverseString = function(string) {
    if (string.length < 2) {
        return string;
    }
    return reverseString(string.slice(1)) + string[0];
}
reverseString('hello world');

// ========================================================
// 4. nth Triangular Number
// What is the input to the program?
// 5
// What is the output of the program?
// 15
// What is the input to each recursive call?
// n * (n + 1) / 2
// What is the output of each recursive call?
// 1, 3, 6, 10, 15

function triangleNum(n) {
    if (n < 2) {
        return n;
    }
    return n + triangleNum(n - 1);
}

triangleNum(5);

// ========================================================
// 5. String Splitter
// Input: '04/19/2020'
// Output: ["04", "19", "2020"]

function split(str, sep) {
    let idx = str.indexOf(sep);
    if ( idx == -1){
        return [str];
    }
    
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}

split('04/19/2020', '/');

// ========================================================
// 6. Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13.

function fibonacci(n) {
    // Base case
    if (n <= 0) {
      return 0;
    }
    // Base case
    if (n <= 2) {
      return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }
  
  fibonacci(7);

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by 
// each number between itself and 1. For example, the factorial of 
// 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    // Base case when num is 0 stop recursion
    if (num === 0) {
        return 1;
    }
    // recursive case
    return n * factorial(n - 1);
}

factorial(5);

// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. 
// There are more than one possible paths through the Maze to the single 
// exit point. Write a recursive function that will help you find a possible 
// path through the maze.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];