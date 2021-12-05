let n = 14; 
let count = 0;
for(let i = 1; i <= n; i++) {
    a = n % i;
    if(a === 0) { count++ }
}

console.log(count);