// https://www.eolymp.com/az/problems/8255

let n = 3;
let s = 25;

for(let i = 10 ** (n - 1); i < 10 ** n; i++) {
    a = i;
    let sum = 0;
    while(a > 0) {
        b = a % 10;
        sum += b;
        a = parseInt(a / 10);
    }
    if(sum === s) {
        console.log(i);
    }
}