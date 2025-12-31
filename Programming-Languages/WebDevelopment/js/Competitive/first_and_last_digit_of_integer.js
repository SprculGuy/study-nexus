const n = 7123456;

let first_digit = n;
const last_digit = n % 10;

while (first_digit >= 10)
    first_digit /= 10;
first_digit = parseInt(first_digit);

console.log(`Integer Value - ${n}`);
console.log(`First Digit - ${first_digit} \nLast Digit - ${last_digit}`);
