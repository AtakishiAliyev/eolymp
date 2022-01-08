// !8962
function findLastMax(array) {
    const last = array[array.length - 1]
    let max = array[0]

    for (let i = 0; i < array.length; i++){
        if(max < array[i]) { max = array[i] }
    }

    const indexes = []

    for (let i = 0; i < array.length; i++){
        if(array[i] === max) {
            indexes.push(i)
        }
    }

    array[indexes[indexes.length - 1]] = last;
    array[array.length - 1] = max;

    return array
}

const result = findLastMax([6, -3, 7, -4, 7, 4, -5])
console.log(result)