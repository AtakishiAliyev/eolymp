// !8961
function changeMin(array) {
    let first = array[0]
    let min = array[0]

    for(let item of array) {
        if(min > item) { min = item }
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === min ) {
            array[i] = first;
        }
    }

    array[0] = min
    return array
}

const result = changeMin([6, -3, 5, -5, -4, 7, -5]);
console.log(result);