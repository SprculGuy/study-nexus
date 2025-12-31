const n = 5;

let a = 1;
let b = 1;

if (n == 0)
    console.log(a);
else if (n == 1)
    console.log(a + " " + b);
else {
    process.stdout.write(a + ", " + b);
    for (let i = 2; i < n; i++) {
        let c = a + b;
        process.stdout.write(", " + c);
        a = b;
        b = c;
    }
}


