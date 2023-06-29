let head = null
let tail = null

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


function push(data){
    let newNode = new Node(data)
    let temp = head

    if(head == null){
        head = newNode
        tail = newNode
    }else{
        newNode.prev = tail
        tail.next = newNode
        tail = newNode
    }
}

function deleteNode(data){
    let temp = head
    let prev = null

    if(temp == null){
        console.log('list is empty')
        return
    }

    if(temp != null && temp.data == data){
        head = temp.next
        head.prev = null
        return
    }

    while(temp != null && temp.data !=data ){
        prev = temp
        temp = temp.next
    }

    prev.next = temp.next
    if(temp.next !== null){
        temp.next.prev = prev
    }
}

function findMid(){
    let prev = null
    let slowPointer = head
    let fastPointer = head

    while(fastPointer != null && fastPointer.next != null){
        fastPointer = fastPointer.next.next
        prev = slowPointer
        slowPointer = slowPointer.next
    }
    prev.next = slowPointer.next
    console.log("mid is: ",slowPointer.data)
}

function insertAfter(prev_data,data){
    let newNode = new Node(data)
    let temp = head
    let prev = null

    if(temp == null){
        console.log("list is empty")
        return
    }

    while(temp != null && temp.data != prev_data){
        prev = temp
        temp = temp.next
    }

    if(temp == null){
        console.log("data not found")
        return
    }

    newNode.next = temp.next
    temp.next = newNode
    newNode.prev = temp
    temp.next.prev = newNode

}

function display(){
    let temp = head
    while(temp !== null){
        console.log(temp.data)
        temp = temp.next
    }
}

push(10)
push(11)
push(12)
push(13)
deleteNode(10)
display()
findMid()
display()
insertAfter(11,14)
display()