let head = null

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function displayList(){
    let temp = head
    if(temp == null){
        console.log('list is empty')
        return
    }
    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
}

function push(data){
    let newNode = new Node(data)
    let temp = head;

    if(head == null){
        head = newNode
    }else{
        while(temp.next != null){
            temp= temp.next
        }
        temp.next = newNode
    }    
}

function deleteNode(data){
    let temp = head
    let prev = null
    if(temp === null){
        console.log('list is empty')
        return
    }

    if(temp.data === data){
        head = temp.next
        return
    }
    while(temp != null && temp.data != data){
        prev = temp
        temp = temp.next
    }

    if(temp == null){
        console.log("no element found")
        return
    }

   prev.next = temp.next
}

function insertBefore(prev_data,data){
    let newNode = new Node(data)
    let temp = head
    let prev = null

    if(temp == null){
        console.log("list is empty")
        return
    }

    if(temp.data == prev_data){
        newNode.next = head
        head = newNode;
        return
    }

    while(temp != null && temp.data != prev_data){
        prev = temp
        temp = temp.next
    }
    if(temp == null){
        console.log('key not found')
        return
    }
    prev.next = newNode
    newNode.next = temp
}

function insertAfter(prev_data,data){
    let newNode = new Node(data)
    let temp = head

    if(temp == null){
        console.log('list is empty')
        return
    }

    while(temp != null && temp.data != prev_data){
        temp = temp.next
    }

    if(temp == null){
        console.log('key not found')
        return
    }
    newNode.next = temp.next
    temp.next = newNode
}



push(10)
push(20)
push(30)
insertBefore(10,40)
displayList()
console.log("")
insertAfter(30,40)
deleteNode(40)
displayList()
