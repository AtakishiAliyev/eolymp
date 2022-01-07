/*
 * *practice-1-AtakishiAliyev
 */ 

// !Task 1
// function reverseArray(array) {
//     const res = [];

//     for(let i = array.length - 1; i >= 0; i--) {
//         res.push(array[i])
//     }

//     return res
// }

// const result = reverseArray([92846, 96841, 33582, 25998]);
// console.log(result);


// !Task 2
// function oddCheck(number) {
//     while(number > 0) {
//         digit = number % 10
//         if(digit % 2 !== 0) {
//             return "Yes"
//         } else {
//             return "No"
//         }
//         number = parseInt(number / 10)
//     }
// }

// const result = oddCheck(2345);
// console.log(result);


// !Task 3
// function pattern(row, col) {
//     let string = "";

//     for(let i = 1; i <= row; i++) {
//         for(let j = 1; j <= col; j++) {
//             if(i === 1 || i === row || j === 1 || j === col) {
//                 string += "*"
//             } else {
//                 string += " " 
//             }
//         }
//         string += "\n";
//     }

//     return string
// }

// const result = pattern(3, 5);
// console.log(result);


// !Task 4
// function leftRotate(array, n) {
//     return res = array.concat(array.splice(0, n))
// }

// const result = leftRotate([1, 2, 3, 4, 5], 2);
// console.log(result);


// !Task 5
// var checkCapital = function(word) {
//     if (word === word.toUpperCase() || word === word.toLowerCase() || word === word[0].toUpperCase() + word.slice(1).toLowerCase()){
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// const result = checkCapital("FLaG");
// console.log(result);


// !Task 6
// function moveNumbers(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === number) {
//             array.splice(i, 1)
//             array.push(number)
//         }
//     }
//     return array
// }

// const result = moveNumbers([0, 1, 0, 3, 12, 13, 12], 0);
// console.log(result);


/*
* strings-classwork-AtakishiAliyev
*/
// !Task 1
// function findMin(array) {
//     min = array[0]

//     for (let el of array) {
//         if(min > el) { min = el }
//     }

//     return min
// }

// const result = findMin([31, 15, 40])
// console.log(result);


// !Task 2
// function findBigger(number) {
//     lastDigit = number % 10;

//     while (number > 0) {
//         digit = number % 10
//         number = parseInt(number / 10)
//     }

//     if(digit > lastDigit) {
//         return digit
//     } else {
//         return lastDigit
//     }
// }   

// const result = findBigger(638)
// console.log(result);


// !Task 3
// function findMore(number, x, y) {
//     countX = 0;
//     countY = 0;

//     while (number > 0) {
//         digit = number % 10
//         digit === x ? countX++ : countY++
//         number = parseInt(number / 10)
//     }

//     if(countX > countY) {
//         return x
//     } else if(countX < countY) {
//         return y
//     } else {
//         return "="
//     }
// }

// const result = findMore(55222, 2, 5)
// console.log(result);


// !Task 4
// function countSentences(text) {
//     count = 0;
//     replace = /[.!?]/;
//     array = text.split(replace);

//     for(let item of array) {
//         if(item !== "") { count++ }
//     }  
    
//     return count
// }

// const result = countSentences("Hi!!! Hello world.");
// console.log(result);


// !Task 5
// function findCount(string) {
//     count = 0;

//     for (let i = 1; i < string.length; i++) {
//         if (string[i] === '+' || string[i] === '-' || string[i] === '*') {
//             count++;
//         }
//     }

//     return count;
// }

// const result = findCount('-1+2*3+a');
// console.log(result);


// !Task 6
// function countWord(text) {
//     count = 0;
//     array = text.split(" ");

//     for(let item of array) {
//         if(item !== "") { count++ }
//     }

//     return count
// }

// const result = countWord("Hello world! Hello,    country!")
// console.log(result);


// !Task 7
// function findLetterCount(text) {
//     const array = text.split("p");
//     const res = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] !== "") {
//             res.push(array[i])
//         }
//     }

//     let max = res[0]

//     for(let i = 0; i < res.length; i++) {
//         if(max < res[i]) {
//             max = res[i]
//         }
//     }

//     return max.length
// }

// const result = findLetterCount("kpkkp");
// console.log(result);


// !Task 8
// function toUpperFirstLetter(text) {
//     const array = text.split(" ");
//     const res = [];

//     for(let i = 0; i < array.length; i++) {
//         word = array[i].charAt(0).toUpperCase() + array[i].slice(1);
//         res.push(word)
//     }

//     return res.join(" ")
// }

// const result = toUpperFirstLetter("introduction to algorithms");
// console.log(result);


// !Task 9
// function letterCount(text, c) {
//     let count = 0;

//     for(let i = 0; i < text.length; i++) {
//         if(c.toLowerCase() === text[i].toLowerCase()) {
//             count++
//         }
//     }

//     return count
// }

// const result = letterCount("This is a cat sitting on a table", "t");
// console.log(result);


// !Task 10
// function findIndex(text) {
//     const index = [];

//     for (let i = 0; i < text.length; i++) {
//         if(text[i] === " ") {
//             index.push(i)
//         }
//     }

//     if(index.length > 0) {
//         return [index[0], index[index.length - 1]]
//     } else {
//         return "-1"
//     }
// }

// const result = findIndex("I am programming on Python.")
// console.log(result);


/*
* Interview question
*/
// const arr = ['asff', 'aasr', 'aaabb', 'aaaa', 'fsar'];
// let count = 0;
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         count = 0;
//         for (let k = 0; k < arr[i].length; k++) {
//             if (arr[i][j] == arr[i][k] && j != k) {
//                 count++;
//             }
//         }
//         if (count == 1 && !newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
// }
// console.log(newArr);