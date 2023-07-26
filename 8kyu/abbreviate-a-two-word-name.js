// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My Solution

function abbrevName(name){

    let letters = name.split("")
    
    for (let i = 0; i < letters.length; i++){
      if (letters[i] == " "){
        return letters[0] + "." + letters[i+1]
      }
    }
    
}
