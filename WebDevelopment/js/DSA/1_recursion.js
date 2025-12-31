/******************************************************************************

Using recursion in the divide and conquer method can minimize the size of your problem at each step and take less time than a naive iterative approach
    
Steps:
    1. Base case/Terminating condition (eg. if n == 0: return 1)
    2. Recurion call (eg. factorial(n-1))
    3. Calculation (eg. n * factorial(n-1))

*******************************************************************************/



// Factorial for given number
function factorial(n) {
    if (n === 0)
        return 1;
    else
        return n * factorial(n - 1);
}

const n = 3;
const result = factorial(3);
console.log(`Factorial of ${n} is: ${result}`);
/******************************************************************************/



// Recursion on string to replace a character from string
function replaceChar(s, char1, char2) {
    if (s.length === 0)
        return s;

    r = replaceChar(s.slice(1), char1, char2);

    if (s.at(0) == char1)
        return char2 + r;

    return s.at(0) + r;
}

const string = "axaxxa";
const replaceFrom = 'a';
const replaceTo = 'b';
const result2 = replaceChar(string, replaceFrom, replaceTo);
console.log(`Replacing "${replaceFrom}" from "${string}" by "${replaceTo}" to get "${result2}"`);
/******************************************************************************/



// Recursion on string to remove consecutive duplicate characters from string
function removeConsecutiveDuplicates(s) {
    if (s.length <= 1)
        return s;

    if (s.at(0) === s.at(1)) {
        return removeConsecutiveDuplicates(s.slice(1));
    } else {

        return s.at(0) + removeConsecutiveDuplicates(s.slice(1));
    }
}

const string1 = "xxxyyyzwwzzz";
const result4 = removeConsecutiveDuplicates(string1);
console.log(`Removing duplicates from "${string1}" to get result: "${result4}"`);
/******************************************************************************/



// Binary Search using Recursion
function binarySearch(array, x, si, ei) {
    if (si > ei)
        return -1;

    const mid = parseInt((si + ei) / 2);

    if (array.at(mid) === x)
        return mid;
    else if (array.at(mid) > x)
        return binarySearch(array, x, si, mid - 1);
    else
        return binarySearch(array, x, mid + 1, ei);
}

array = [0, 12, 34, 56, 73, 89, 90, 100];
const si = 0;
const ei = array.length - 1;
const m = 89;
const result3 = binarySearch(array, m, si, ei);
console.log(`Array : [${array}]`);
console.log(`Index of ${m} in given array is: ${result3}`);
/******************************************************************************/


