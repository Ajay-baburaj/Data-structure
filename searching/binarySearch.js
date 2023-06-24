function binarySearch(array,target){
    let left =0
    let right = array.length-1

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(array[mid]== target){
            return mid
        }else if(array[mid]< target){
            left= mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}



const array = [1, 4, 7, 11, 15, 19, 22, 27];
const target = 15;
const result = binarySearch(array, target);

if (result !== -1) {
    console.log(`Target value ${target} found at index ${result}`);
} else {
    console.log('Target value not found');
}