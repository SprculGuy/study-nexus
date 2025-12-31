
// A function to print all prime factors
// of a given number n
let n = 3178;
// let n = 31;


console.log(`Factors of ${n} that are prime numbers: `)
while (n % 2 == 0) {                    // for even numbers
	// Print the number of 2s that divide n
	process.stdout.write("2 ");
	n /= 2;
}

for (let i=3; i<= n^(1/2); i+=2) {
	// n must be odd at this point. So we can skip one element (i+=2)
	while (n % i == 0) {
		// While i divides n, print i and divide n
		process.stdout.write(`${i} `);
		n /= i;
	}
}

if (n > 2) // This condition is to handle the case when n is a prime number greater than 2
	console.log(n);





