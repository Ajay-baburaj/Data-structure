const findKthLargest =(array,k)=>{
    if(k > array.length){
        return
    }
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    
    return array[array.length-k]
}

const result = findKthLargest([10,5,3,8,4,7],3)
console.log(result)

