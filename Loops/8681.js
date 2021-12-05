let n = 1203405;
let x = 1;

while(n > 0) {
    a = n % 10;
    if( a !== 0) {
        x *= a; 
    }
    n = parseInt(n / 10);
}

console.log(x);