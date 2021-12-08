// https://www.eolymp.com/az/problems/8642

let a = 1000;
let b = 3000;

for(let i = a; i <= b; i++) {
    n = i
    let sum = 0;

    while(n > 0) {
        x = n % 10;
        sum += x**4; 
        n= parseInt(n / 10);
    }

    if(sum === i) { console.log(i); }
}