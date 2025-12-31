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
	3000
);


console.log("0th sec;", "p1 5 sec timer started");
setTimeout(()=>{ console.log("3rd sec;", "p2 5 sec timer started"); }, 3000)

const res1 = await p1;
console.log("5th sec;", res1);

const res2 = await p2;
console.log("8th sec;", res2);
