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