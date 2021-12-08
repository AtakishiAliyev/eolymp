// https://www.eolymp.com/az/problems/8532

let a = 5;
let b = 10;
let x = "";
let y = "";

for(let i = a; i <= b; i++) {
    x = x + " " + i**2;
    y = i**3 + " " + y;
}
 
console.log(`${x}\n${y}`);