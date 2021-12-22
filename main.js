// Quantum-arrays-classwork
// Task 1
// let arr = [1.2, 1.3, 5.7, 1.8, 12.4];
// let sum = 0;

// for(let el of arr) {
//     sum += el;
// }

// console.log(sum);


// Task 2
// let arr = [5, 9, 3, 4, 6];
// let max = arr[0];

// for(let el of arr) {
//     if(max < el) {
//         max = el;
//     }
// }

// console.log(max);


// Task 3
// let arr = [1, 2, -3, 4]
// let res = []

// for(let el of arr) {
//     if(el > 0) { el += 2 } 
//     res.push(el)
// }

// console.log(res);

// Task 4
// let arr = [3, 6, 5, 3, 5, 5, 4, 5, 4, 3, 2, 3, 6, 4]
// let min = arr[0]
// let max = arr[0]

// for(let el of arr) {
//     if(min > el) { min = el }
//     if(max < el) { max = el }
// }

// console.log(max - min);


//Task 5
// let nums = [1, 2, 3, 4];
// let last = nums.pop();
// nums.unshift(last)
// console.log(nums);


// Task 6
// let arr = [5, 1, 6, 5, 9]
// let min = arr[0]
// let max = arr[0]

// for(let el of arr) {
//     if(min > el) { min = el }
//     if(max < el) { max = el }
// }

// if(arr.length > 1) {
//     console.log(min, max);
// } else {
//     console.log("Opsss");
// }

// Task 7
// let arr = [14, 17, 16, 3, 7, 19, 9]
// let res = []

// for(let el of arr) {
//     if(el % 2 !== 0) {
//         res.push(el)
//     }
// }

// console.log(res);


//  Task 8
// let arr = [1, 6, 2, 6, 2]
// let max = arr[0]
// let count = 0;

// for(let el of arr) {
//     if(max < el) {
//         max = el
//         count = 1;
//     } else if(max === el) {
//         count++
//     }
// }

// console.log(max, count);


//Task 9
// let arr = [5, 9, 3, 4, 6, 9];
// let max = arr[0];
// let sum = 0;

// for(let el of arr) {
//     if(max < el) {
//         max = el
//     } 
// }

// for(let el of arr) {
//     if(el < max) {
//         sum += el;
//     }
// }

// console.log(sum);


//Task 10
// let nums = [1, 5, 2, 6, 3];
// let max1 = nums[0]
// let min = nums[0]

// for(let el of nums) {
//     if(min > el) {
//         min = el
//     }
//     if(max1 < el) {
//         max1 = el
//     }
// }

// let max2 = min

// for(let el of nums) {
//     if(el > max2 && el !== max1) {
//         max2 = el
//     }
// }

// console.log(max2, max1);


// Quantum-arrays-homework
// Task 1
// let nums = [3, 5, -7, 7, 5, -9, -4, 7, 7, 7, -9];
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
// let arr = [3, 5, -7, 7, 5, -9, -4]
// let max = arr[0];

// for(let i = 0; i < arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i]
//         index = i + 1;
//     }
// }

// console.log(max, index);


// Task 3
// let arr = [14, 16, 3, 7, 17, 19, 9]
// let res = []

// for(let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0) {
//         res.push(arr[i])
//     }
// }

// console.log(res);


//Task 4
// let arr = [14, 16, 3, 7, 17, 19, 9]
// let res = []

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < arr[i + 1]) {
//         res.push(arr[i + 1])
//     }
// }

// console.log(res);


// Task 5
// let arr = [3, 5, -7, 7, 5, -9, -4]
// let res = []

// for(let i = 0; i < arr.length; i++) {
//     last = arr[i]
//     if(i % 2 === 1) {
//         res.push(arr[i], arr[i - 1])    
//     }
// }

// if(arr.length % 2 !== 0) { res.push(last) }

// console.log(res);

// Task 6

// let arr = [6, -3, 5, -5, -4, 7, -5]
// let min = arr[0]
// let x = arr[0]

// for(let i = 0; i < arr.length; i++) {
//     if(min > arr[i]) {
//         min = arr[i]
//     }
// }

// arr[0] = min;

// console.log(arr.indexOf(min));


// 
