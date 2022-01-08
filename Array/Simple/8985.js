// !8985
function removeLetter(text, letter) {
    let array = [];

    for(let item of text) {
        if(item !== letter) {
            array.push(item)
        }
    }

    return array
}

const result = removeLetter("abrakadabra", "a");
console.log(result);