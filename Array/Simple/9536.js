// !9536
function sumMatrix(A, B, n, m) {
    let sum = [];
    for(let i = 0; i < n; i++) {
        sum.push(new Array())
        for(let j = 0; j < m; j++) {
            sum[i][j] = A[i][j] + B[i][j]
        }
    }
    return sum
}

const result = sumMatrix(
        [ [3, 4, 5, 6], [1, 2, 3, 4], [7, 6, 5, 4] ], 
        [ [0, 0, -3, -2], [-1, 3, 4, 5], [5, 6, 1, 2] ],
        3,
        4
    );
console.log(result);