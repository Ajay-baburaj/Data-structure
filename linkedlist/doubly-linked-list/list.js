let head
let tail

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

function push(data){
    const newNode = new Node(data)
    let current = head
    if(current == null){
        head = newNode
    }else{
        tail.next = newNode
        newNode.prev = tail
    }
    tail = newNode
}

function insertAfter(prev_node,data){
    let new_node = new Node(data)
    let temp = head

    if(temp != null && temp.data != prev_node){
        temp = temp.next
    }
    if(tail == tail){
        tail.next = new_node
        new_node.prev = tail
        tail = new_node
    }

    if(temp != null && temp.data == prev_node){
        new_node.next = temp.next
        temp.next = new_node
        new_node.next.prev = new_node
        new_node.prev = temp
    }else{
        console.log('there is no prev_node found')
    }

}

function deleteNode(key){
    let temp = head
    let prev = null

    if (temp !== null && temp.data === key) {
        head = temp.next;
        if (head !== null) {
            head.prev = null;
        }
        return;
    }

    while(temp != null && temp.data != key ){
        prev =temp
        temp = temp.next
    }

    if (temp === null) {
        console.log("Key not found.");
        return;
    }
    prev.next = temp.next

    if (temp.next !== null) {
        temp.next.prev = prev;
    }

}

function printList(){
    let temp = head
    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
}

function ReversePrint(){
    let temp = tail
    while(temp != null){
        console.log(temp.data)
        temp = temp.prev
    }
}

push(2)
push(10)
push(8)
push(25)
deleteNode(2)

printList()
// ReversePrint()
   