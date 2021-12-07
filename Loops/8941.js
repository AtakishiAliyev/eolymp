// https://www.eolymp.com/az/problems/8941


let a = 2;
let b = 3;
let x = 0;

for(let i = 1; i <= a; i++) {
    let res = "";
    for(let j = 1; j <= b; j++) {
        x++
        res += " " + x;
    } 
    console.log(res);
}