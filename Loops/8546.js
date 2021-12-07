// https://www.eolymp.com/az/problems/8546

let n = 12;
let s = 0;

for(let i = 1; i <= n; i++) {
    s += 1 / (i * (i + 1)); 
}

console.log(s);