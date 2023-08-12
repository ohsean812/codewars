// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// My Solution

function findShort(s){
    let wordsArray = s.split(" ")
    let lengthsArray = []
    for (let i = 0; i < wordsArray.length; i++){
      lengthsArray.push(wordsArray[i].length)
    }
    return Math.min(...lengthsArray)
}


// Solution refactored

function findShort(s){
    let wordsArray = s.split(" ")
    return Math.min(...wordsArray.map(word => word.length))
}
