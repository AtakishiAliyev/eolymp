// https://www.eolymp.com/az/problems/1609

let n = 25557;
let a = 5;
let count = 0;

while(n > 0) {
    x = n % 10;
    if( x === a ) { count++ }
    n = parseInt(n / 10);
}

console.log(count);