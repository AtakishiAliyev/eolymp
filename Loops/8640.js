// https://www.eolymp.com/az/problems/8640

let a = 4567;
let b = 5130;


for(let i = a; i <= b; i++) {
    n = i;
    let isOdd = true;

    while(n > 0) {
        x = n % 10;
        if(x % 2 === 0 ){
            isOdd = false;
            break;
        }
        n = parseInt(n / 10);
    }

    if(isOdd == true) {
        console.log(i);
    }
}



