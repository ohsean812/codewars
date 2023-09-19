// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// My Solution

function removeUrlAnchor(url){  
    for (let i = 0; i < url.length; i++){
      if (url[i] === "#"){
        return url.slice(0, i)
      } else if (!url.includes("#")){
        return url
      }
    }
}


// Refactored

function removeUrlAnchor(url){
    return url.split('#')[0];
}
