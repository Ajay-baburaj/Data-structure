let max = 5
let array = []
let top = array.length

function push(key){
    if(top == max){
        console.log('stack overflow')
    }else{
        array[top++]= key
    }
}

function pop(){
    if(top== 0){
        console.log('stack underflow')
    }else{
        top--
        array.length--
    }
}
function IsEmpty(){
  return top === 0
}

function IsFull(){
    return top === max
}

function peek(){
    if(top==0){
        console.log('there is nothing to show')
        return
    }
    return array[top-1]
}

function mid(){
    if (IsEmpty()) {
        console.log('Stack is empty.')
        return;
    }

    const mid = Math.floor((array.length-1)/2)
    let stackSize = array.length

    for(let i=0;i<mid;i++){
        pop()
    }

    console.log("middle Element: ",peek())
    array.length = stackSize
}

function deleteMidElement(){
    const middle = Math.floor((array.length-1)/2)
    let stackSize = array.length
    for(let i=middle;i< stackSize-1;i++){
        array[i] =array[i+1]
    }
    top--
    array.length =stackSize-1
}

function reverseString(str){
    let reversedString = ''
    for(let i=0;i<str.length;i++){
        push(str[i])
    }

    while(!IsEmpty()){
        reversedString += peek()
        pop()
    }
    return reversedString 
}

// push(1)
// push(2)
// push(3)
// push(4)
// push(5)
// pop()
// console.log(IsEmpty())
// console.log(IsFull())
// console.log(peek())
// console.log(array);
// console.log(mid())
// deleteMidElement()
// console.log(array)
console.log(reverseString("hello"))