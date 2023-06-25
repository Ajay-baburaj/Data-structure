let max = 4
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

push(1)
push(2)
push(3)
push(4)
pop()
console.log(IsEmpty())
console.log(IsFull())
console.log(peek())
console.log(array);