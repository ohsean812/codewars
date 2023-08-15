// It is known that all events are recorded in chronological order and two events can't occur in the same second.

// Return the minimum number of days during which the log is written.

// Example:

// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1

// Input -> ["12:12:12"]
// Output -> 1

// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2

// Input -> []
// Output -> 0


// My Solution

function checkLogs(log) {
  
    if (log.length == 0){
      return 0
    }
    
    let dateNumbers = log.map(timestamp => Number(timestamp.replaceAll(":", "")))
    let dayCount = 1
    for (let i = 1; i < dateNumbers.length; i++){
      if (dateNumbers[i] <= dateNumbers[i-1]){
        dayCount += 1
      }
    }
    return dayCount
    
}
