// https://www.eolymp.com/az/problems/917

let arr = [6, 7.5, 2.1, 2.0, 0, -3];
let min = arr[0];

for(let item of arr) {
    if(min > item) {
        min = item
    }
}

console.log(min * 2);