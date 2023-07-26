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
        return letters[0].toUpperCase() + "." + letters[i+1].toUpperCase()
      }
    }   

}


// Refactored

function abbrevName(name){
    let words = name.split(" ")
    return (words[0][0] + "." + words[1][0]).toUpperCase()
}
