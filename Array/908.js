// https://www.eolymp.com/az/problems/908

let arr = [12, 15, 18];
let sum = 0;

for(let item of arr) {
    if(item % 6 === 0) {
        sum += item
    }
}

console.log(sum);