// !8967
function findOld(array) {
    let min = array[0];
    let max = array[0];
    let oldArray = [];

    for(let item of array) {
        if(min > item) { min = item }
        if(max < item) { max = item }
    }

    let oldArrayMax = min;
    let oldArrayMin = 2*min - max; 

    for(let item of array) {
         oldArray.push(item - oldArrayMax + oldArrayMin)
    }

    return oldArray;
}

const result = findOld([7, 5, 14, 9, 7, 5, 8]);
console.log(result);