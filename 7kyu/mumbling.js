// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


// My Solution

function accum(s) {
    
    let capS = s.toUpperCase();
    let result = []
    for (i = 0; i < capS.length; i++){
      result.push(capS[i] + lowerCase(capS[i], i))
    }
    return result.join("-")

    function lowerCase(letter, count){
        return letter.toLowerCase().repeat(count)
    }

}


// Refactored

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
