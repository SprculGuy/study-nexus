const promiseObj = new Promise(function(resolve, reject) {
	setTimeout(function() {
		if (false) resolve('response');
		else reject(new Error("time out"));
	},
		1000
	);
});

try {
	const res = await promiseObj;
	console.log(res);
} catch (e) {
	console.log(e);
}





const promiseObj1 = new Promise(function(resolve) {
	setTimeout(function() {
		if (true) resolve('response1');
		else {throw new Error("time out");}
	},
		1000
	);
});

try {
	const res1 = await promiseObj1;
	console.log(res1);
} catch (e) {
	console.log(res1);
	console.log(e);
}





const wait = function(seconds) {
	return new Promise(function(resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

wait(2).then(() => {
	console.log('waited for 2 seconds');
	return wait(1);
}).then(() => {
	console.log('waited for 1 seconds');
}).catch((e) => {
	console.log(e);
});





const call_with_timeout = function(seconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {reject(new Error("rejected after 4.66 seconds"));}, seconds / 1.5 * 1000);
		setTimeout(resolve, seconds * 1000);						 // to resolve/reject replace division with multiplication
	});
};

call_with_timeout(7).then(() => {
	console.log('resolved after 7 seconds');
	return wait(1);
}).then(() => {
	console.log('waited for 1 seconds before catch');
}).catch((e) => {
	console.log(e);
}).then(() => {
	return wait(1);
}).then(() => {
	console.log('waited for 1 seconds after catch');
}).finally(() => {
	return wait(1);
}).then(() => {
	console.log('waited for 1 seconds after finally');
});
