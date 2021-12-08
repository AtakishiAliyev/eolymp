// https://www.eolymp.com/az/problems/8533

let a = 2000;
let b = 2015;

for(let i = a; i <= b; i++ ) {
    n = i;
    let isDiff = true;

    while(n > 0) {
        x = n % 10;
        n = parseInt(n / 10);
        z = n;
        while(z > 0) {
            a = z % 10;
            if(x === a) {
                isDiff = false;
                break;
            }
            z = parseInt(z / 10);
        }
    }

    if(isDiff === true) {
        console.log(i);
    }
}