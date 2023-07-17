const findFrequency = (array)=>{
    const frequency = {}
    for(let i=0;i<array.length;i++){
        frequency[array[i]] = (frequency[array[i]] || 0) + 1
    }
    return frequency
}


const result = findFrequency([1,2,3,1,2])
console.log(result)