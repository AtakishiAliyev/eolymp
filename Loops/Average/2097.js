// https://www.eolymp.com/az/problems/2097

let a = 100;
let b = 105;

for(let i = a; i <= b; i++) {
    n = i;
    let isDiff = true;

    while(n > 0) {
        x = n % 10;
        n = parseInt(n / 10);
        z = n;

        while(z > 0) {
            d = z % 10;
            if(x === d) {
                isDiff = false;
                break;
            }
            z = parseInt(z / 10)
        }
    }

    if(isDiff == true) { console.log(i); }
}
