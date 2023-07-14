const array = [1,3,5,7]

function binarySearch(array,key){
    let left =0
    let right = array.length-1

    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if(array[mid] < key){
            left = mid+1
        }else if(array[mid]> key){
            right = mid-1
        }else{
            return mid
        }   
    }
}

console.log(binarySearch(array,3))





// var x={},
//   y={key:"y"},
//   a={key:"z"},
//   z={key:"z"};
// x[y] = 11;
// x[z] = 21;
// x[a] = 43;
// console.log(x[y]);

// var i = 1;
// for (;i<4;){
//     console.log(i)
//   i = i + 1;
// }

// var cars=2;
// do{
//   cars/=2;
// }while(cars<1);

// console.log("Number of cars: " + cars);