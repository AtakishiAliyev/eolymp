// !8987
function changeLetter(text, a, b) {
    array = [];

    for(let i = 0; i < text.length; i++) {
        array.push(text[i])    
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === a) {
            array[i] = b
        } else if(array[i] === b) {
            array[i] = a
        }
    }

    return array.join('');
}

const result = changeLetter("abrakadabra", "a", "b");
console.log(result);