// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// My Solution

function digitize(n) {
    let string = n.toString()
    let reversedArray = string.split("").reverse()
    return reversedArray.map(e => parseInt(e))
}


// Refactored

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
