const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("p1 resolved");
	},
		5000);
});
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("p2 resolved");
	},
		7000
	);
});


console.log("0th sec;", "p1(5 sec) & p2(7 sec) timer started");

const res1 = await p1;
console.log("5th sec;", res1);

const res2 = await p2;
console.log("7th sec;", res2);
