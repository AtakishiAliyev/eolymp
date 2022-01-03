let arr = [5, 9, 3, 4, 6];
let max = arr[0]
for(let item of arr) {
    if(max < item) { max = item }
}

console.log(max);