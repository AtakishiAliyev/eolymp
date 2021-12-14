// Task 1
// let nums = [3, 5, -7, 7, 5, -9, -4];
// let count = 0;

// for(let i = 0; i < nums.length; i++) {
//     for(j = 0; j < nums.length; j++) {
//         if(nums[i] === nums[j]) {
//             break
//         }
//     }
//     if(i === j) { count++ }
// }

// console.log(count);


// Task 2
// let nums = [3, 5, -7, 7, 5, -9, -4];
// let max = nums[0];

// for(let i = 0; i < nums.length; i++) {
//     if( max < nums[i] ) {
//         max = nums[i];
//         index = i + 1;
//     }
// }

// console.log(max, index);

// Task 3
// let nums = [14, 16, 3, 7, 17, 19, 9];
// let res = [];

// for(let i = 0; i < nums.length; i++) {
//     if(i % 2 === 0) {
//         res.push(nums[i])
//     }
// }

// console.log(res);

// Task 4
// let nums = [14, 16, 3, 7, 17, 19, 9];
// let res = [];

// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] < nums[i+1]) {
//         res.push(nums[i + 1]);
//     }
// }

// console.log(res);


//Task 5
// let nums = [3, 5, -7, 7, 5, -9, -4];
// let count = 0;
// let res = [];

// for(let i = 0; i < nums.length; i++) {
//     last = nums[i];
//     count++;
//     if(i % 2 === 1 ) {
//         res.push(nums[i], nums[i - 1]);
//     } 
// }

// if(count % 2 !== 0) { res.push(last) }

// console.log(res);


// Task 6
// let nums = [6, -3, 5, -5, -4, 7, -5];
// let min = nums[0];

// for(let i = 0; i < nums.length; i++) {
//     first = nums[0];
//     if(min > nums[i]) {
//         min = nums[i]
//     } 
// }

// for(let j = 0; j < nums.length; j++) {
//     if(nums[j] === min) {
//         x = j;
//         break;
//     }
// }

// nums[0] = min;
// nums[x] = first;

// console.log(nums);