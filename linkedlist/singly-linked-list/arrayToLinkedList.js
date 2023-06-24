class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class linkedList {
    constructor(array) {
        this.head = null
        this.tail = null

        for (let i = 0; i < array.length; i++) {
            let node = new Node(array[i])
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                this.tail.next = node
                this.tail = node
            }
        }
    }
    printList() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }

    }
}

let array = [2, 9, 8, 3]
let linkedlist = new linkedList(array)
linkedlist.printList()