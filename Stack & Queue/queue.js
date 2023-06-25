class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let front = null
let rear = null

function enQueue(data) {
    let new_node = new Node(data)
    if (rear == null) {
        front = rear = new_node
        return
    }
    rear.next = new_node
    rear = new_node
}


function deQueue() {
    if (front == null) {
        return
    }
    let temp = front
    front = front.next

    if (front == null) {
        rear = null
    }
}

function display() {
    let temp = front
    while (temp != null) {
        console.log(temp.data)
        temp = temp.next
    }

}


enQueue(10)
enQueue(5)
enQueue(6)
enQueue(9)
display()

deQueue()
console.log('display after deque')
display()