// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:
//     Input:
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//     Output:
//     'alpha beta gamma delta'


// My Solution

function removeDuplicateWords (s) {
    let unique = []
    let splitted = s.split(" ")
    for (let i = 0; i < splitted.length; i++){
      if (!unique.includes(splitted[i])){
        unique.push(splitted[i])
      }
    } return unique.join(" ")
}
