//Task
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