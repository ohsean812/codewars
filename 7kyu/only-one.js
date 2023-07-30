// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false  


// My Solution

function onlyOne(...booleans) {
  
  let trueCount = 0
  
  for (let i = 0; i < booleans.length; i++){
    if (booleans[i] == true) {
      trueCount++
    }
  }
  if (trueCount > 1) {
    return false
  }
  
  return trueCount == 1

}


// Refactored

function onlyOne() {
  
  let trueCount = 0
  
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] == true) {
      trueCount++
    }
  }
  if (trueCount > 1) {
    return false
  }
  
  return trueCount == 1

}

// "arguments" is a built-in object that you can access within a function, even if no parameter has been assigned.
// note this is not an array, but it's an "array-like" object which array methods will NOT work on.


// Re-refactored

function onlyOne() {
    let args = [...arguments]
    return args.filter(Boolean).length === 1 
}
