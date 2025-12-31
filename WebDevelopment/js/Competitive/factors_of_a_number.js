const n = 6;

console.log("factors of %d are: ", n);

process.stdout.write(`1`);
for (let i = 2; i <= n; i++) {
    if (n % i == 0)
        process.stdout.write(`, ${i}`);
}
