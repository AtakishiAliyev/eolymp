// !9618
function sum(array) {
    let sum = 0;

    for(let item of array) {
        if(item < 0) {
            sum += item
        }
    }
    return sum
}

const result = sum([-5, 6, 8, -3, 0])
console.log(result);