// !904
function increase(array) {
    let newArr = [];
    for(let item of array) {
        if(item > 0) {
            item += 2
            newArr.push(item)
        } else (
            newArr.push(item)
        )
    }
    return newArr
}

const result = increase([1, -2, 3, 4])
console.log(result);