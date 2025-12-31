let number = 4;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++)
        process.stdout.write(`${number++}`);
    console.log();
}
