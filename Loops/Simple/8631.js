// https://www.eolymp.com/az/problems/8631

let n = 2354666;
let max = 0;
let count = 1;

while(n > 0) {
    if(max < n % 10) {
        max = n % 10;
    } else if(max === n % 10) {
        count++;
    }
    n = parseInt(n / 10)
}

console.log(count);