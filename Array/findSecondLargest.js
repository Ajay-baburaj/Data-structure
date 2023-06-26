
function findSecondLargest(array){
    const n =array.length
    let largest = array[0]
    let secondLargest 

    for(let i=0;i<n;i++){
        if(array[i]> largest){
            secondLargest = largest
            largest = array[i]
        }else if(secondLargest < largest && array[i]>secondLargest){
            secondLargest= array[i]
        }
    }
    return secondLargest
}

const array =[100,5,8,150,50,120]
console.log(findSecondLargest(array))