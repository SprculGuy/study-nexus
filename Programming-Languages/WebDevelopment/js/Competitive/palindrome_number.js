// 454 is Palindrome Number

let number, digit, reverse = 0, original;
number = 45554;
original = number;

while (parseInt(number) > 0) {
    digit = parseInt(number % 10);
    // console.log("digit", digit);
    reverse = reverse * 10 + digit;
    // console.log("reverse", reverse);
    number /= 10;
    // console.log("number", number);
    // console.log();
}

if (original == reverse)
    console.log(`${original} is Palindrome Number`);
else
    console.log(`${original} is Not a Palindrome Number`);


