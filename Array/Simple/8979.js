// !8979
function findLetter(text, letter) {
    let array = [];
    
    for(let item of text.toLowerCase()) {
        if(text.toLowerCase().includes(letter.toLowerCase())) {
            if(item === letter.toLowerCase()) {
                array.push(item)
            } 
        } else {
            return "-1"
        }
    }

    return array
}

const result = findLetter(" Abrakadabra", "a");
console.log(result);