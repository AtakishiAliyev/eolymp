// !8986
function remove(text, x, y) {

    for (let i = 0; i < text.length; i++) {
        res = text.slice(0, x) + text.slice(y + 1, text.length)   
    }

    return res
}

const result = remove("abrakadabra", 3, 6);
console.log(result);