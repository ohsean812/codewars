// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// My Solution

function getCount(str) {
    let letters = str.split("")
    let vowelCount = 0
    for (let i = 0; i < letters.length; i++){
      if (letters[i] == "a" || letters[i] == "e" || letters[i] == "i" || letters[i] == "o" || letters[i] == "u"){
        vowelCount++
      }
    }
    return vowelCount
}
