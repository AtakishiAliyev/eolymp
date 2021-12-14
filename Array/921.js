// https://www.eolymp.com/az/problems/921

let arr = [6, -7.5, 2.1, -2.0, 0];
let count = 0;
let sum = 0;

for(let item of arr) {
    if(item < 0) {
        count++
        sum += item;
    }
}

console.log(count, sum);