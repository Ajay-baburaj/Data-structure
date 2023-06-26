function findLargestAndLowest(array){
    const n= array.length
    let largest = array[0]
    let lowest = array[0]
    for(let i=0;i<array.length-1;i++){
        if(array[i]>largest){
            largest = array[i]
        }else if(array[i]<lowest){
            lowest = array[i]
        }
    }
    return {largest,lowest}
}


const array =[100,5,8,150,50,25]
console.log(findLargestAndLowest(array))