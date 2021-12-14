let nums = [1, 6, 2, 6, 2, 6, 6];
let max = nums[0];
let count = 0;

for(let item of nums) {
    if(max < item) {
        max = item;
        count = 1;
    } else if(max === item) {
        count++
    }
}

console.log(max, count);