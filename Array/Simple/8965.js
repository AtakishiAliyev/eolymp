// !8965
function findArr(array) {
    let min = array[0];
    const newArr = [];

    for(let item of array) {
        if(min > item) { min = item }
    }

    for(let item of array) {
        newArr.push(item - (min / 2))
    }

    return newArr;
}

const result = findArr([1, 7, -1, -4, 2, 1, 2]);
console.log(result);