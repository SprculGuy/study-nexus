const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("p1 resolved");
	},
		5000);
});

let p2;
setTimeout(() => {
	p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("p2 resolved");
		},
			5000
		);
	});
},
	4000
);


console.log("0th sec;", "p1 5 sec timer started");
setTimeout(()=>{ console.log("4th sec;", "p2 5 sec timer started"); }, 4000)
const res1 = await p1;
console.log("5th sec;", res1);

setTimeout(async function() {
	console.log("8th sec", "setTimeout 3 sec expired");
	const res2 = await p2;
	console.log("9th sec;", res2);
},
	3000
);
