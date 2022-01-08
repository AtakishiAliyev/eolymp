// !7849
function changeArray(array) {
    let min = array[0];
    let max = array[0]; 

    for(let i = 0; i < array.length; i++) {
        if(min > array[i]) { min = array[i] }
        if(max < array[i]) { max = array[i] }
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === min ) {
            array[i] = max
        } else if(array[i] === max) {
            array[i] = min
        }
    }

    return array
}

const result = changeArray([3, 5, -7, 7, 5, -9, -4])
console.log(result);