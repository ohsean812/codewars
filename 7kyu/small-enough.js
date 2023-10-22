// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


// My Solution

function smallEnough(a, limit){
    let overCount = 0
    for (let i = 0; i < a.length; i++){
      if (a[i] > limit){
        overCount++
      }
    }
    return overCount > 0 ? false : true
}


// Refactored

function smallEnough(a, limit){
    return Math.max(...a) <= limit
}
