function factorial(n) {    // factorial using recursion
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

const n = 4;
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i; j++)   // for left spacing
        process.stdout.write(" ");

    for (let j = 0; j <= i; j++)
        process.stdout.write(" " + factorial(i) / (factorial(i - j) * factorial(j)));    // nCr formula
    console.log();
}