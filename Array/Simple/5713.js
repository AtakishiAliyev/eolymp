let arr = [3, 6, 5, 3, 5, 5, 4, 5, 4, 3, 2, 3, 6, 4]
let min = arr[0];
let max = arr[0];

for(let el of arr) {
    if(min > el) min = el;
    if(max < el) max = el;
}

console.log(max - min);