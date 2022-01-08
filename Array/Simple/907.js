// !907
function find(array, el) {
    let count = 0;
    for(let item of array) {
        count++
        if(item < el) {
            return [count, item]
            break
        }
    }
}

const result = find([6, 7.5, 2.1, 2.0, 0], 2.5)
console.log(result);