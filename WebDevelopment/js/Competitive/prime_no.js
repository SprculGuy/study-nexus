const num = 17;

let isPrime = true;
for (let i = num - 1; i > 1; i--) {
    if (num % i == 0) {
        console.log("Not Prime");
        isPrime = false;
        break;
    }
}

if (isPrime)
    console.log("Prime");

