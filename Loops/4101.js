// https://www.eolymp.com/az/problems/4101

let n = 3;
let count = 0;
let res = "";

for(let i = 100; i <= 999; i++) {
    b = i;
    sum = 0;
    while(b > 0) {
        a = b % 10;
        sum = sum + a;
        b = parseInt(b / 10);
    }
    if(sum === n) {
        count++
        res = res + "\n" + i;
    }
}
console.log(count + res);