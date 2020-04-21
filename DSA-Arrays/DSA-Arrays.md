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

5. 