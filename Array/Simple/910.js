// https://www.eolymp.com/az/problems/910

let arr = [5.2, -2, 4];
let sum = 0;
let count = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        count++
        sum += arr[i];
    }
}

if(sum > 0) {
    console.log(sum / count);
} else {
    console.log("Not found");
}