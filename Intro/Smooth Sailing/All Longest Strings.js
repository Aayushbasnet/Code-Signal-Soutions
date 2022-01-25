/*
// Given two strings, find the number of common characters between them.

    // Example
        For s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3.

        Strings have 3 common characters - 2 "a"s and 1 "c".

    // Input/Output
        [execution time limit] 4 seconds (js)

        [input] string s1
            A string consisting of lowercase English letters.

            Guaranteed constraints:
                1 ≤ s1.length < 15.

        [input] string s2
            A string consisting of lowercase English letters.

        Guaranteed constraints:
            1 ≤ s2.length < 15.

        [output] integer
*/

// My solution in js
function solution(s1, s2) {
    let total = 0;
    let newStr = s2;
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < newStr.length; j++){
            if(s1[i] === newStr[j]){
                total ++;
                newStr = newStr.replace(newStr[j], '');
                break;
            }
        };
    };
    return total;
}

/* 
    // Top(2) solution in js
    function solution(s1, s2) {
        for (var i = 0; i < s1.length; i++) {
            s2 = s2.replace(s1[i], "!");
        }
        return s2.replace(/[^!]/g, "").length;
    }
*/