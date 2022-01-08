// !8964
function addRight(array) {
    let max = array[0];

    for(let item of array) {
        if(max < item) { max = item }
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === max) {
            array.push(parseInt(array.splice(i, 1)))
        }
    }

    return array
}

const result = addRight([6, -2, 7, 1, 7, -1, 2])
console.log(result)