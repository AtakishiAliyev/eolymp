let a = 2;
let b = 7;
let res = "";

for(let i = a; i <= b; i++) {
    if(i % 2 !== 0) { 
        res += " " + i;
    }
}

console.log(res);