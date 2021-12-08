let n = 4563217819;
let isDiff = false;

while(n > 0) {
    x = n % 10;
    n = parseInt(n / 10);
    z = n;
    while(z > 0) {
        a = z % 10;
        if(x === a) {
            isDiff = true;
        }
        z = parseInt(z / 10)
    }   
}

isDiff === true ? console.log("Yes") : console.log("No");