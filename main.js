// Task 1
// let n = 3;
// let star = ""
// let res = "";

// for(let i = 1; i <= n; i++) {
//     star += "*"
// }

// for(let j = 1; j <= n; j++) {
//     res = res + "\n" + star
// }

// console.log(res);

// Task 2
// let n = 5;
// let res = "";

// for(let i = 1; i <= n; i++) {
//     res += "*"
//     console.log(res);
// }


// Task 3
// let n = 3;
// let arr = [];

// for(let i = 0; i < n; i++){
//     arr.push(new Array(n));

//     for(let j = 0; j < n; j++){
//         if(i + j + 1 == n) {
//             arr[i][j] = 0;
//         }
//         else if(i == 0 || j == 0) {
//             arr[i][j] = 2;
//         }
//         else {
//             arr[i][j] = 1;
//         }
//     }
// }
// console.log(arr);


// Task 4
// let n = 5;
// let m = 2;
// let x = 4;
// let y = 2;
// let matrix = [];
// let arr = [];

// for(let i = 0; i < n * m; i++) {
//     if(i % 2 === 0) {
//         arr = [];
//         arr.push(i)
//     } else {
//         arr.push(i)
//         matrix.push(arr)
//     }
// }

// console.log(matrix[x - 1][y - 1]);


// Task 5
let n = 5;
let i = 4;
let j = 2;
let res = [];

for (let i = 0; i < n; i++) {
    res.push([])
}

let count = 1; 
let startCol = 0;
let endCol = n - 1; 
let startRow = 0; 
let endRow = n - 1; 

while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) { 
      res[startRow][i] = count;
      count++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) { 
        res[i][endCol] = count; 
        count++;
    }
    endCol--; 

    for (let i = endCol; i >= startCol; i--) {
        res[endRow][i] = count;
        count++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
        res[i][startCol] = count;
        count++;
    }
    startCol++;
}

console.log(res[i - 1][j - 1]);