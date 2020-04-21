What is the Big O for this?
1. Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed
as your dog. You stand up and yell out, who here has a golden retriever 
and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

Ans: Constant Time 0(1) 
No matter the number of people you only have to yell once.

2. Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed 
as your dog. You start with the first person and ask him if he has a 
golden retriever. He says no, then you ask the next person, and the next,
and the next until you find someone who has a golden or there is no one 
else to ask.

Ans: Linear Time 0(n).  
You have to ask each person until you have asked everyone.

2. Even or Odd - What is the Big O of the following algorithm?

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

Ans: Constant time 0(1) because the value is only one size, so the function only needs to run once.

3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

Ans: Polynomial time 0(n^2).  The value of input size n raised to some constant power k. In this case there are two layers of looping happening.
Three layers of looping would be 0(n^3)

4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    let ticks = 1;
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
        ticks++
    }
    return array;
}

Ans: Linear time O(n).  The algorithm has to go through each item in the array in order to double each item. 
4 items would take twice as long as 2 items.

5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    
}

Ans: 0(n) because the size of the array stays the same as it iterates through it in the loop.  
It would have to iterate through each item until it finds the correct item.


6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

Ans: Polynomial time 0(n^2).  There are two layers of loops happening to print out the console.log message.
Each layer increases the inputs power by 1.


7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Ans: Linear time O(n), because the value of number dictates the number of iterations through the array. 
2 would be twice as much as 1

8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

Ans: Logarithmic Time O(log(n)), because each iteration the array is shrinking 

9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Ans: Constant time O(1), because it only takes in the value once and produces the result.

10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

Ans: This finds prime numbers. Linear time O(n).  
This still iterates the amount of times for the input provided.

11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
1. Only one disk may be moved at a time 
2. Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. 
3. A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?

12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

1. count sheep - O(n)
const countingSheep = function(numOfSheep) {
    if (numOfSheep === 0) {
        console.log('All sheep jumped over the fence') 
    }
    else if (numOfSheep > 0) {
        for (let i = 1; i <= numOfSheep; i++) {
            console.log('Another sheep jumped over the fence.') 
            if (i === numOfSheep) {
                console.log('All sheep jumped over the fence') 
            }
        }
    } 
}

const numOfSheep = 3;
countingSheep(numOfSheep);

2. powerCalculator - O(n)

const powerCalculator = function(base, expo) {
    let result = base;
    for (let i = 1; i < expo; i++) {
        result = result * base;
    }
    return result;
}

console.log(powerCalculator(10, 3));

3. Reverse String - O(n)

function reverseString(string) {
    if (string.length < 2) {
        return string;
    }
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

reverseString('hello');

4. nth Triangular Number - 0(2^n) Exponential because any increase in input size will have a running time that grows rapidly.

function triangleNum(n) {
    if (n < 2) {
        return n;
    }
    let points = 1;
    for(let i = 2; i <= n; i++) {
    points += i
  }
  return points
}

triangleNum(5);

5. String Splitter - 0(log(n))

function split(str, sep) {
    let idx = str.indexOf(sep)
    if ( idx == -1){
        return [str];
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result = [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
    }
    return result;
}

split('04/19/2020', '/')

6. Fibonacci Sequence - 0(n)

function fibonacci(n) {
    let a = 1, b = 0, temp;

    while(n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}
  
fibonacci(7)

7. Factorial - O(n) 

function factorial(n) {
    let result = n;
    if (n === 0 || n === 1) {
        return 1;
    }

    while (n > 1) {
        n--;
        result = result * n;
    }
    return result;
}

factorial(5)