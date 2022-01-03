// !8960
// function difference(array) {
//     let min = array[0];
//     let max = array[0];
//     let sum = 0;

//     for(let el of array) {
//         if(min > el) { min = el }
//         if(max < el) { max = el }
//     }

//     for(let el of array) {
//         if(el !== min && el !== max) {
//             sum += el;
//         }
//     }

//     return sum
// }

// const result = difference([6, 2, 7, 1, 7, 1, 2])
// console.log(result);