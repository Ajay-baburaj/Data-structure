let name = 'ajay baburaj'

let largest = 0
function getLargestWord(name){
    let nameSplit = name.split(' ')
    let largest = nameSplit[0]

    for(let i=1;i<nameSplit.length;i++){
        if(nameSplit[i].length >largest.length){
            largest = nameSplit[i]
        }
    }
    return largest
 
}

console.log(getLargestWord(name))