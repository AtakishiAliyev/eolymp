let arr = [14, 17, 16, 3, 7, 19, 9];
let res = [];

for(let el of arr) {
    if(el % 2 !== 0) {
        res.push(el)
    }
}

console.log(res);