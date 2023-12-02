/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphaNumeric = s.replace(/[^0-9a-z]/gi, '')
    let lowerCase = alphaNumeric.toLowerCase()
    console.log(lowerCase)
    let startPoint1, startPoint2
    if(lowerCase.length%2 == 0 ){
        startPoint1 = parseInt((lowerCase.length/2) -1 )
        startPoint2= parseInt(lowerCase.length/2)
    }
    else{
        startPoint1 = parseInt(lowerCase.length/2)
        startPoint2 = parseInt(lowerCase.length/2)
    }
    
    for(let i=startPoint1, j=startPoint2; i>=0, j<=s.length-1; i--, j++){
        if(lowerCase[i] !== lowerCase[j])
            return false
    }
    return true
};