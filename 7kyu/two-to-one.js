// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// My Solution

function longest(s1, s2) {
    let rearranged = (s1 + s2).split("").sort().join("")
    
    let cleaned = ""
    
    for (i = 0; i < rearranged.length; i++){
      if (rearranged[i] !== rearranged[i+1]){
        cleaned += rearranged[i]
      }
    }
    return cleaned;
}
