const word = "who"

function checkPalindrome(word){
    const split = word.split('')
    for(let i=0;i<split.length/2;i++){
        if(split[i] != split[split.length-1-i]){
            return false
        }
    }
    return true
}


console.log(checkPalindrome(word))