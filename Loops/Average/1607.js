// https://www.eolymp.com/az/problems/1607

let n = 100;
let rev = "";

while(n > 0) {
    x = n % 10;
    rev += x; 
    n = parseInt(n / 10);
}
console.log(rev);