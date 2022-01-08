// !9393
function removeOdd(text) {
    let array = text.split("");

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < 10; j++) {
            if(array[i] === `${j}` && array[i] % 2 !== 0) {
                array.splice(i, 1)
            }
        }
    }

    return array.join("")
}

const result = removeOdd("a1b2c3d4567hfgh");
console.log(result);