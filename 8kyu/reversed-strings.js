// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// My Solution

function solution(str){
    let splittedString = str.split("");
    let reverseString = splittedString.reverse();
    let reversedString = reverseString.join("")
    return reversedString;
}


// Refactored

function solution2(str){
    return str.split("").reverse().join("")
}
