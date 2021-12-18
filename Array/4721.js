// https://www.eolymp.com/az/problems/4721 

let num = 35335;
let n = 5;
let count = 0;

while(num > 0) {
    a = num % 10;
    if(a === n) {
        count++
    }
    num = parseInt(num / 10)
}

console.log(count);