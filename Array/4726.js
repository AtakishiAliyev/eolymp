// https://www.eolymp.com/az/problems/4726

let word = "comfort";
let letter = "f";
let arr = [];

for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
        arr.push(i)
    }
}

console.log(arr);