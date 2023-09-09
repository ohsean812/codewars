// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30


// My Solution

function getDivisorsCnt(n){
    let divisors = 0
    for (let i = 1; i <= n; i++){
      if (n % i == 0){
        divisors++
      }
    }
    return divisors
}


// Optimized for big tests (from other solutions)

function getDivisorsCnt(n) {
    let divisors = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        // If i is a divisor, then there is a corresponding divisor n/i
        if (n / i === i) {
          divisors++;
        } else {
          // Both i and n/i are divisors
          divisors += 2;
        }
      }
    }
    return divisors;
}
