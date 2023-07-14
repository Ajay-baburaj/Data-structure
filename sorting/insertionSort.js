function insertionSort(array){
    for(i=1;i<array.length;i++){
        let key = array[i]
        let j=i-1
        while(j>=0 && array[j]>array[j]){
            array[i+1] = array[i],
            j = j-1
        }
        array[j+1] = key
    }

    return array
}

const array = [1,5,6,10,8,50]
const result = insertionSort(array)
console.log(result)

