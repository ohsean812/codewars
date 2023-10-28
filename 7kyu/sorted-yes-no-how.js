// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


// My Solution

function isSortedAndHow(array) {
    let ascend = [...array].sort((a, b) => a - b)
    let descend = [...array].sort((a, b) => b - a)
    if (JSON.stringify(array) === JSON.stringify(ascend)){
      return "yes, ascending"
    } else if (JSON.stringify(array) === JSON.stringify(descend)){
      return "yes, descending"
    } else {
      return "no"
    }
}
