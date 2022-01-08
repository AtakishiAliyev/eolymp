// !8966
function reverse(array) {
    let reverse = [];

    for(let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i])
    }

    return reverse;
}

const result = reverse([6, 0, -7, 2, -3, 5, 7])
console.log(result);