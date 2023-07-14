function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length-1;j++){
            if(array[i]>array[j]){
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}

const array = [1,5,6,10,8,50]
const result = bubbleSort(array)
console.log(result)