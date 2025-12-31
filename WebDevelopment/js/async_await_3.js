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
		5000
	);
});


console.log("0th sec;", "p1 & p2 5 sec timer started");
const res1 = await p1;
console.log("5th sec;", res1);
console.log("5th sec;", "p2 resolved but not consumed")

setTimeout(async function() {
	console.log("8th sec", "settimeout 3 sec expired");
	const res2 = await p2;
	console.log("8th sec;", res2, "and consumed");
},
	3000
);
