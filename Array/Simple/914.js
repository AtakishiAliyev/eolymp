// https://www.eolymp.com/az/problems/914

let arr = [-76.45, 7.5, -5.1, 75.23];
let max = arr[0];

for(let item of arr) {
    if(item < 0) { item = -1 * item }
    if(max < item) { max = item }    
}

console.log(max);