// https://www.eolymp.com/az/problems/4727

let word = "comfort";
let letter = "f";
let arr = [];

for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
        arr.push(i)
    }
}

if(arr.length === 1) {
    console.log(-1);
} else if(arr.length === 0) {
    console.log(-2);
} else if(arr.length > 1) {
    x = arr.pop()
    console.log(x);
}