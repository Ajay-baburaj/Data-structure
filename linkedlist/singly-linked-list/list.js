let head

class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}

function printList(){
    let n= head;
    while(n != null){
        console.log(n.data)
        n= n.next
    }
}


function push(new_data){
    let new_node = new Node(new_data)
    new_node.next = head;
    head = new_node
}

function insertInBetween(new_data,prev_node){
    if(prev_node == null){
        console.log('prev node cannot be zero')
        return
    }
    const new_node  = new Node(new_data)
    new_node.next = prev_node.next
    prev_node.next = new_node
}

function append(new_data){
    let new_node = new Node(new_data)
    if(head == null){
        head = new Node(new_data)
        return
    }
    new_node.next = null
    let last = head
    while(last.next != null){
        last = last.next
    }
    last.next = new_node
    return
}

function deleteNode(key) {
    let temp = head;
    let prev = null;
    
    if (temp == null) {
        return;
    }
    
    if (temp != null && temp.data == key) {
        head = temp.next;
        return;
    }
    
    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }
    
    if (temp == null) {
        return; // Key not found
    }
    
    prev.next = temp.next;
}


push(20)
printList()
deleteNode(10)
console.log('after deleting')
deleteNode(20)
printList()

