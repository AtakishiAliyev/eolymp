// !9027
function findCount(number) {
    let array = number.toString().split("");
    let obj = {};

    for(let item of array) {
        if(obj[item]) { obj[item]++ } 
        else { obj[item] = 1 }
    }

    let res = [];

    for (let i = 0; i < 10; i++) {
        if(obj[i] !== undefined) {
            res.push(obj[i])
        } else (
            res.push(0)
        )
    }

    return res
}

const result = findCount(11245677890);
console.log(result);