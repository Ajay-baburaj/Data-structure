class Node{
    constructor(data){
        this.data= data
        this.next = null
    }
}

class LinkedList{
    constructor(array){
        this.head =  null
        this.tail = null
        for(let i=0;i<array.length;i++){
            let newNode = new Node(array[i])
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }else{
                this.tail.next = newNode
                this.tail=newNode
            }
        }
    }

    display(){
        let temp = this.head
        while(temp != null){
            console.log(temp.data)
            temp=temp.next
        }
    }
}

const array = new Array(1,2,3,4)
let list = new LinkedList(array)
list.display()




