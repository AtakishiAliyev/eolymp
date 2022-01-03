// !919
function myFunction(array) {
    let count = 0;
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        if( array[i] > 0 && i % 3 === 0 ) {
            console.log(array[i], i);
            count++
            sum += array[i]
        }
    }

    return [count, sum]
}

const result = myFunction([6, 7.5, 2.1, 2.0, 0, -3])
console.log(result);