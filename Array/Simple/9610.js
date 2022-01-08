// !9610
function sum(text) {
    let array = text.split(" ");
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < 10; j++) {
            if(array[i] === `${j}`) {
                sum += parseInt(array[i])
            }
        }
    }

    return sum
}

const result = sum("A 1 2 B C D A B C 1 9 B 3")
console.log(result);