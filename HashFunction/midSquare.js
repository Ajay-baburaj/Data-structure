class hashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    hashing(key){
        const numDigits = Math.floor(Math.log10(key))+1
        const middle = Math.floor(numDigits/2)
        const square = key ** 2
        return parseInt(square.toString().slice(middle,middle+1))
    }
    
    add(key,val){
        let index = this.hashing(key)
        this.table[index] = val
    }

    get(key){
        let index = this.hashing(key)
        console.log("finded-value",this.table[index])
    }

    remove(key){
        let index = this.hashing(key)
        this.table[index] = undefined
    }
    
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] != undefined)
            console.log(i,"====",this.table[i])
        }
    }

}

const a = new hashTable(5)
a.add(60,'ajay')
a.get(60)
a.display()

