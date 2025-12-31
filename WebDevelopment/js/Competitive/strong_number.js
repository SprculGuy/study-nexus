// Strong number is a special number whose sum of the factorial of digits is equal to the original number. 
// For Example: 145 is strong number. Since, 1! + 4! + 5! = 145
// The first few of these numbers are 1, 2, 145, 40585, 871, and 45361


const inputNumber = 145;  //declare an int variable and initialize a number as value        
let factorial, digit;    //declare variables for factorial value and the extracted digits
let sum = 0;            //declare a variable to store the sum value
let temp = inputNumber; //transfer the input value to a temporary variable

let i;
while (temp != 0) {
    i = 1;
    factorial = 1;
    digit = parseInt(temp % 10);  //extracting the digit

    while (i <= digit) {
        factorial = factorial * i;
        i++;
    }

    sum = sum + factorial;  //store the sum value
    temp = parseInt(temp / 10);       //removing the digit one by one
}

if (sum == inputNumber)  //if sum value is equal to input number
    console.log(inputNumber + " is a strong number\n");
else                        //if sum value is not equal to input number
    console.log(inputNumber + " is not a strong number\n");
