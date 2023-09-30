// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial

// My Solution

function factorial(n){
    let multiplied = 1
    for (let i = 1; i <= n; i++){
      multiplied *= i
    }
    return multiplied
}
