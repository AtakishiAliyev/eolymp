// https://www.eolymp.com/az/problems/2863
let n = 12;

for(let i = 1; i <= n; i++) {
    a = n % i;
    if( a === 0 ) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}