// https://www.eolymp.com/az/problems/2098

let arr = [2, 4, 1, 3, 5, 3, 1];
let res = [];

for(let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}

console.log(res);