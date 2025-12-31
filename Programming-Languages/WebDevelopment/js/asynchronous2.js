const getJSON = async function(url, err = `Something went wrong`) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${err} 😁 ${res.status}`);
	return await res.json();
};
const timeout = function(sec) {
	return new Promise(function(_, reject) {
		setTimeout(function() {
			reject(new Error(`Request timed out!`));
		}, sec * 1000);
	});
};
//----------------------------------------------------------------



//Promise.all
(async function() {
	try {
		const data = await Promise.all([                             // all promises in array executes parallelly
			getJSON('https://restcountries.com/v3.1/name/india'),
			getJSON('https://restcountries.com/v3.1/name/egypt'),
			getJSON('https://restcountries.com/v3.1/name/india'),
		]);
		console.log(data);                               // returns array of responses promise objects for all promises
		console.log(data.map(item => item[0].capital));
	} catch (e) {
		console.error(e);                // if any one of promises reject, then promise.all() will be rejected
	}
})();
//----------------------------------------------------------------



// Promise.race
Promise.race([                              // returns first settled(resolve/reject) response promise objects 
	getJSON('https://restcountries.com/v3.1/name/india'),
	getJSON('https://restcountries.com/v3.1/name/egypt'),
	getJSON('https://restcountries.com/v3.1/name/india'),
	// timeout(0.0001),
	timeout(0.1)
]).then(
	// res => console.log(res[0])
).catch(err => console.error(err));
//----------------------------------------------------------------



// Promise.allSettled               // returns all settled(resolve/reject) response promise objects, not matter success or failed
Promise.allSettled([
	Promise.resolve('Success'),
	Promise.reject('ERROR'),
	Promise.resolve('Another success'),
]).then(
	// res => console.log(res)
);

Promise.all([                      // if any one of the promises reject, then whole promise.all() will return reject
	Promise.resolve('Success'),
	Promise.reject('ERROR 😁'),
	Promise.resolve('Another success'),
]).then(res => console.log(res)).catch(
	err => err
	// console.error(err)
).catch(err => console.error(err));
//----------------------------------------------------------------



// Promise.any
Promise.any([                       // returns only first resolved response promise objects, ignoring failed/rejected responses of before that first resolve
	Promise.reject('ERROR'),
	Promise.resolve('Success')
]).then(
	// res => console.log(res)
).catch(err => console.error(err));
//----------------------------------------------------------------
