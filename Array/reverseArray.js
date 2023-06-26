const array =[100,5,8,150,50,120]

function reverseArray(array){
    for(let i=0;i<array.length/2;i++){
        let temp = array[i]
        array[i] = array[array.length-i]
        array[array.length-i] = temp
    }
    return array
}

console.log(reverseArray(array))