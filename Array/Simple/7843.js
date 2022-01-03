function myFunction(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i + 1]) {
            res.push(arr[i + 1])
        }
    }
    return res
}

const result = myFunction([14, 16, 3, 7, 17, 19, 9])
console.log(result);