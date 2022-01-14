// !930
// function findNumber(number) {
//     let array = number.split("");
//     let res = [];

//     for (let j = 0; j < 10; j++) {
//         if(!array.includes(`${j}`)) {
//             res.push(j)
//         }
//     }

//     return res
// }

// const result = findNumber("0631562976");
// console.log(result);


// !1607
// function reverse(number) {
//     let array = number.split("");
//     let res = [];

//     for(let i = array.length - 1; i >= 0; i--) {
//         res.push(array[i])
//     }

//     return res.join("")
// }

// const result = reverse("100");
// console.log(result);


// !2097
// function find(a, b) {
//     let res = [];

//     for (let n = a; n <= b; n++) {
//         let num = n.toString();
//         let array = num.split('');
//         let obj = {};
//         let resultToReturn = false;
    
//         for (let i = 0; i < array.length; i++) {
    
//             if(obj[array[i]]) {
//                 obj[array[i]]++
//             } else {
//                 obj[array[i]] = 1
//             }
    
//             if (obj[array[i]] > 1) {
//                 resultToReturn = true
//             }
//         }

//         if(!resultToReturn) { res.push(num) }
//     }

//     return res
// }

// const result = find(100, 105);
// console.log(result);


// !
