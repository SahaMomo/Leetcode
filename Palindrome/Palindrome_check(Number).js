
/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

Answer:->

*/

var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }``
    let mainNumber = x;
    let reversed_digits = 0;

    while (mainNumber > 0) {
        let digit = mainNumber % 10;
        reversed_digits = reversed_digits * 10 + digit;
        mainNumber = Math.floor(mainNumber / 10); // Use Math.floor to ensure integer division
    }  
    return x === reversed_digits; // Use strict equality for comparison
};

// Example of calling the function
let number = 121;
let result = isPalindrome(number);
console.log(`Number ${number} is a palindrome ?  ${result}`);
