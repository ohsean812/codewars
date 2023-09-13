// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


// My Solution

function areYouPlayingBanjo(name) {
    let startLetter = name.toLowerCase().split("")
    if (startLetter[0] == "r"){
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
}


// Refactored

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r" ? `${name} plays banjo` : `${name} does not play banjo`
}