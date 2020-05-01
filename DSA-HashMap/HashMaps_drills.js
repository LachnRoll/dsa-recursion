/* jshint strict: false */
/* jshint esversion: 6 */

const HashMap = require('./DSA-Hashmap');


// 1. Create a HashMap class
// Print your hash map and notice the length and items that are hashed 
// in your hash map. Have you hashed all the items you were asked to?
// length 9, no not items are in hash table. Missing Bilbo & The Necromancer

// Retrieve the value that is hashed in the key "Maiar" and Hobbit.
// Frodo and Sauran which are the second inputed values for duplicate keys

// What are the values of Maiar and Hobbit that you have? Is there a discrepancy? 
// Explain your answer.
// Yes, there is a discrepency because there are two items with the key Hobbit and Maiar
// It is only printing the second input of Hobbit and Maiar because it is overwriting the first input

// What is the capacity of your hash table after you have hashed all the above 
// items? Explain your answer.
// Once the hashmap reaches 50% load capacity it multiplies its size ratio
// by 3.  It originally starts at an initial capacity of 8 and becomes 24.

function main() {
    let lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandolf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    console.log(lotr); // length 9, no not items are in hash table missing Bilbo & Aragorn
    console.log(lotr.get('Hobbit')); // Frodo
    console.log(lotr.get('Maiar')); // Sauron
    // The hashmap only accepts one type value for each key.
    // Once the hashmap reaches 50% load capacity it multiplies its size ratio
    // by 3.  It originally starts at an initial capacity of 8 and becomes 24.
}

main();

// 2. WhatDoesThisDo
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
};

console.log(WhatDoesThisDo());

// What is the output of the following code? explain your answer.
// Creates 2 Hashmaps each with two duplicate keys "Hello World."  
// Each key has different values so the last value set should overwrite the one before.  
// For the first HashMap there should have the value 20.  
// The second HashMap should have the value 10.  

// 3. Demonstrate understanding of Hash maps
// 1) Show your hash map after the insertion of keys 
// 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 
// using open addressing and a hash function k mod m, 
// where k is the key and m is the length.
// key:         22   88              4   15  28  17  59  31  10
// Init index:  0    0     2    3    4   4   6   6   4   9   10   11
// Final index: 0    1     2    3    4   5   6   7   8   9   10   11

// 2) Show your hash map after the insertion of the keys 
// 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions 
// resolved by separate chaining. Let the hash table have a length m = 9, 
// and let the hash function be k mod m.
// index:   0    1     2     3      4     5     6       7      8 
// key:     5    28    20    12                 15             17
// key:          19                             33
// key:          10

// 4. Remove Duplicates

function removeDuplicates(str) {
    let hashMap = new HashMap();
    let output = '';

    for (let i = 0; i < str.length; i++) {
        try {
            hashMap.get(str[i]);
        } catch (e) {
            hashMap.set(str[i], str[i]);
            output += str[i];
        }
    }
    return output;
}

console.log(removeDuplicates('google'));

// 5. Any permutation a palindrome
function isAPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let map = new HashMap();

    for (let i = 0; i < str.length; i++) {
        map.set(str[i], i);
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) !== i) {
            count--;
        } else {
            count++;
        }
    }
    if (count > 1) {
        return false;
    }
    return true;
}
console.log(isAPalindrome('Bob')); //true
console.log(isAPalindrome('02022020')); //true
console.log(isAPalindrome('notapalindrome')); //false


// 6. Anagram grouping
function anagrams(arr) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let result = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split('').sort().join('') === arr[count].split('').sort().join('')) {
            arr1.push(arr[i]);
        } else if (arr[i].split('').sort().join('') === arr[1].split('').sort().join('')) {
            arr2.push(arr[i]);
        } else if (arr[i].split('').sort().join('') === arr[2].split('').sort().join('')) {
            arr3.push(arr[i]);
        }
    }

    result.push(arr1, arr2, arr3);
    return result;
}
let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(anagrams(input));
