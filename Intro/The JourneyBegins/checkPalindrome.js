/* Given the string, check if it is a palindrome.

// Example
    For inputString = "aabaa", the output should be solution(inputString) = true;

    For inputString = "abac", the output should be solution(inputString) = false;

    For inputString = "a", the output should be solution(inputString) = true.

// Input/Output
    [execution time limit] 4 seconds (js)

    [input] string inputString
        A non-empty string consisting of lowercase characters.

        Guaranteed constraints:
            1 ≤ inputString.length ≤ 105.

    [output] boolean
        true if inputString is a palindrome, false otherwise. 
*/

// My solution in js
function solution(inputString) {
    var palindrome = "";
    for(let i=inputString.length; i >0 ; i--){
        palindrome += inputString[i-1];
    }
    if(palindrome == inputString){
        return true;
    }else {
        return false;
    }
}

/* // My solution in py3
    def solution(inputString):
        palindrome = inputString[::-1]
        if(palindrome == inputString):
            return True
        else:
            return False 
*/

/* // Top(2) solution in js 
    function solution(inputString) {
        return inputString == inputString.split('').reverse().join('');
    }
*/