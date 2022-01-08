// !9617
function counter(array) {
    let count = 0;

    for(let item of array) {
        if(item > 0) {
            count++
        }
    }
    return count
}

const result = counter([-5, 6, 8, -3, 0])
console.log(result);