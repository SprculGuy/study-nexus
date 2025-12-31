
let num = 1111;

let count;
for (count = 1; num > 10; count++) {
    num /= 10;
    console.log(num);
}

// let count = 1;
// while (num > 10) {
//     num /= 10;
//     console.log(num);
//     count++;
// }

console.log(`No of digits : ${count}`);

