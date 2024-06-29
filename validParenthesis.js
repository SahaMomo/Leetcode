{/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Answer --->
*/}

var isValid = function(s) {
    var stack = []

    if(s.length > 0){
     for (let letter = 0; letter < s.length; letter++) {
        switch (s[letter]) {
            case '{': {
                stack.push('}');
                break;
            }
            case '[': {
                stack.push(']');
                break;
            }
            case '(': {
                stack.push(')');
                break;
            }

            default: {
                if (stack.pop() !== s[letter]) {
                    return false;
                }
            }
        }
    }
}

else return false

return !stack.length;
};
 
var string1 = ''
var result = isValid(string1)
console.log("Given parenthesis is ", result)