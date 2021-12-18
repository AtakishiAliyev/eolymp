let arr = [14, 16, 3, 7, 17, 19, 9]
let res = []

for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
        res.push(arr[i])
    }
}

console.log(res);