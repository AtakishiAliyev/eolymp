// https://www.eolymp.com/az/problems/928

let arr = [1, 2, 3, 4];
let min = arr[0];
let max = arr[0];

for(let item of arr) {
    if(min > item) { min = item }
    if(max < item) { max = item }
}

console.log(min + max);