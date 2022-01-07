/* Given a sequence of integers as an array,
    determine whether it is possible to obtain a strictly increasing sequence by
    removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if
    a0 < a1 < ... < an.
    Sequence containing only one element is also considered to be strictly increasing.

// Example
    For sequence = [1, 3, 2, 1], the output should be solution(sequence) = false.

    There is no one element in this array that can be removed in order to get a
        strictly increasing sequence.

    For sequence = [1, 3, 2], the output should be solution(sequence) = true.

    You can remove 3 from the array to get the strictly increasing sequence [1, 2].
    Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output
    [execution time limit] 4 seconds (js)

    [input] array.integer sequence
        Guaranteed constraints:
            2 ≤ sequence.length ≤ 105,
            -105 ≤ sequence[i] ≤ 105.

    [output] boolean
        Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false. */

// My solution in js
const sequence = [3,2,1];
function solution(sequence) {
    let bad = 0;
    for(let i = 0 ; i < sequence.length -1 ; i++){
        if(sequence[i] >= sequence[i+1]){
            bad++;
            if(bad > 1) return false;
            if(sequence[i] >= sequence[i+2] && sequence[i-1] >=sequence[i+1]) return false;
        }
    }
    return true;
}

/* // Top(1) solution in js
    function solution(seq) {
        var bad=0
        for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
        bad++
        if(bad>1) return false
        if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
        }
        return true
    }
*/

/* // Solution description 
        The problem can be broken down to smaller questions. For each element in the list...
            Is the current element greater than the last (increasing)?
                Yes...
                    Good! We don't need to do anything.
                No...
                    Has this happened already? If so, it's not almost increasing.
                    If we remove the previous item, are the surrounding items fixed?
                    No? What if we remove the current item instead?
                    Still no? Then that means we can't solve this in one move. It's not almost increasing.
*/

