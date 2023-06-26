class hashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    hashing(key){
        const numDigits = Math.floor(Math.log10(key))+1
        const mid = Math.floor(numDigits/2)
        const square = key ** 2
        return parseInt(square.toString().slice(middle,middle+1))
    }
    
    add(key,val){
        let index = this.hashing(key)
        this.hashTable[index] = val
    }
}

