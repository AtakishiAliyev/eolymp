// https://www.eolymp.com/az/problems/8938

let n = 2;
let m = 3;
let col = "";
let res = "";

// for(let i = 1; i <= n; i++) {
//     for(let i = 1; i <= m; i++) {
//         col = col + "#";
//         // console.log(col);
//     }
//     // console.log(col);
//     res = res + "\n" + col;
// }
// console.log(res);

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
        col = col + "#";
    }
    res = res + "\n" + col;
}
console.log(res);