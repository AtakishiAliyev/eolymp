// https://www.eolymp.com/az/problems/8641

let a = 100;
let b = 400;

for(let i = a; i <= b; i++) {
    n = i;
    let sum = 0;

    while(n > 0) {
        x = n % 10;
        sum += x**3;
        n = parseInt(n / 10);
    }

    if(sum === i) { console.log(i) }
}