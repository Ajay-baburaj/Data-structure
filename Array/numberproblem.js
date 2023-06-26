let string = "India is my country"
let new_string= string.split(" ")

function getStringBeforLast(new_string){
    for(let i=0;i<new_string.length;i++){
        if(new_string[new_string.length-1] == ''){
            return new_string[new_string.length-2]
        }else{
            return new_string[new_string.length-2]
        }
    }
}

console.log(getStringBeforLast(new_string))


