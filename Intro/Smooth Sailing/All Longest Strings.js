/*
// Given an array of strings, return another array containing all of its longest strings.
    
    // Example
        For inputArray = ["aba", "aa", "ad", "vcd", "aba"], 
        the output should be solution(inputArray) = ["aba", "vcd", "aba"].

    // Input/Output
        [execution time limit] 4 seconds (js)

        [input] array.string inputArray
            A non-empty array.

            Guaranteed constraints:
                1 ≤ inputArray.length ≤ 10,
                1 ≤ inputArray[i].length ≤ 10.

        [output] array.string
            Array of the longest strings, stored in the same order as in the inputArray.
*/

// My solution in js
function solution(inputArray) {
    var result = [], val = -1, i = 0, j = 1;
    if(inputArray.length !== 1){    
        for(let x =0; x < inputArray.length - 1; x++){
            if(inputArray[i].length >= inputArray[j].length){
                    j++;
            }else {
                i = j;
                j++; 
            }
            val = inputArray[i].length;
        }
        for(let x =0; x < inputArray.length; x++){
            if(inputArray[x].length === val){
                result.push(inputArray[x]);  
            }
        }
        return result;
    }else {
        return inputArray;
    }
}

/*
// Top(1) solution in js
    function solution(inputArray) {
        'use strict';
        let maxSize = Math.max(...inputArray.map(x => x.length));
        return inputArray.filter(x => x.length === maxSize);
    }
*/