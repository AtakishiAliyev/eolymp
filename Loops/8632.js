let n = 2354;
let count = 0;

while(n > 0) {
    a = n % 10;
    if(a % 2 !== 0) { count++ }
    n = parseInt(n / 10);
}

console.log(count);