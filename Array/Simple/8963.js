// !8963
function addLeft(array) {
    let min = array[0];

    for(let i = 0; i < array.length; i++) {
        if(min > array[i]) { min = array[i] }
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === min) {
            array.unshift(parseInt(array.splice(i, 1)));
        }
    }

    return array
}

const result = addLeft([6, -3, -7, -6, -7, -4, -5])
console.log(result)