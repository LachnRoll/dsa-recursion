 1. How many searches?
 Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using 
 the recursive binary search algorithm, identify the sequence of 
 numbers that each recursive call will search to try and find 8.

 Looks at middle of the array, which will give it 12. 8 is less than 12,
 so it will go to the middle of the lower half giving it 6.  8 is more
 than 6, so it will find the middle point between 6 and 12 giving it 8.

 2. Adding a React UI
 dsa-searching-app

 3. Find a book
 Imagine you are looking for a book in a library with a Dewey Decimal index. 
 How would you go about it? Can you express this process as a search algorithm? 
 Implement your algorithm to find a book whose Dewey and book title is provided.

    function findBook(dewey, title, start, end) {
        start = start === undefined ? 0 : start;
        end = end === undefined ? dewey.length : end;

        if (start > end) {
            return 'Book not found';
        }
        const index = Math.floor((start + end)  2);
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

 4. Searching in a BST

    1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?
    in order: 14 15 19 25 27 35 79 89 90 91
    pre-order: 35 25 15 14 19 27 89 79 91 90

    35 = root
       < 35 left side => 25, 15, 14, 19, 27 || > 35 right side => 89, 79, 91, 90
    
    25 = left side root 
        < 25 => 15, 14, 19 || > 25 => 27
    
    89 = right side root
        < 89 => 79 > || > 89 => 91, 90

                35
                /\
            25      89
            /\      /\
          15  27  79  91
          /\          /
        14  19      90

    2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
    post order: 5 7 6 9 11 10 8
    8 = root
        < 8 left side => 5, 7, 6 || > 8 right side => 9, 11, 10
    
    6 = left side root
        < 6 left side => 5 || > 8  right side => 7
    
    10 = right side root
        < 10 left side => 9 || > 10 right side => 11

                8
                /\
            6       10
            /\      /\
           5  7    9  11
    pre-order: 8 6 5 7 10 9 11