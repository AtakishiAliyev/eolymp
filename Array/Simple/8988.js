// !8988
function change(text, a, b) {
    return text.split(a).join(b)
}

const result = change("abrakadabra", "ab", "ups");
console.log(result);