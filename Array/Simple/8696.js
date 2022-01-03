// !8696
// function countNum(n, a, b) {
//     let count2 = 0;
//     let count5 = 0;
//     while(n > 0) {
//         x = n % 10;
//         if(x === a) {
//             count2++
//         } else if(x === b) {
//             count5++
//         }
//         n = parseInt(n / 10);
//     }
//     if(count2 > count5) {
//         return console.log(a);
//     } else if(count2 < count5) {
//         return console.log(b);
//     } else {
//         return console.log("=");
//     }
// }
// countNum(555522, 2, 5)