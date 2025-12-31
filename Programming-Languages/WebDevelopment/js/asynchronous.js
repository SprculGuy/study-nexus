// XMLHttpRequest() API request

let req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.com/v3.1/name/india');
req.send();                                      // load event will trigger after getting the response
req.addEventListener('load', function() {
	const [data] = JSON.parse(this.responseText);        // converting JSON string to object
	// console.log(data);
});




//------------------------------------------------------------------------------------------------
// Fetch API request(using promises and then)

const optionObj = {};
req = fetch('https://restcountries.com/v3.1/name/india', optionObj);    // req -> promise object
// req = fetch('https://restcountries.com/v3.1/india', optionObj)
// req.then(res => res.json(), err => console.log(err)).then(data => {console.log(data)})               // using then again as json() also returns promise object
req.then(res => {
	if (!res.ok)
		throw new Error(`error is ${res.status}`);                               // mannual error throw for 404 response
	return res.json();
}).then(data => {
	// console.log(data)
}).catch(err => console.error(err));//.finally(()=>loading_cursor.style.display = None)         // error can be handled as above line(rescallback, errcallback) or this catch()
// catch also returns promise object thats why we can use finally




//------------------------------------------------------------------------------------------------
// Async/Await API request(just implementation because behind the scenes it works exactly like using promises using fetch().then())

const asyncFunc = async function() {
	try {
		const res = await fetch('https://restcountries.com/v3.1/name/india');            // fetch('https://github.com/programming.git').then()  
		// const res = await fetch('https://restcountries.com/v3.1/india')            
		if (!res.ok) throw new Error(`error is 😁 ${res.status}`);
		const data = await res.json(); // await stops the execution of function(which is being executed asynchronously in Web APIs environment without blocking call stack) until promise is fulfilled
		// console.log(data[0]) 
		return data[0];
	} catch (err) {
		console.error(err);
		throw err;   // reject() promise returned from asyncFunc
	}//finally(){}
};
asyncFunc().then(data=>console.log(data)).catch(err=>console.error(err))//.finally(()=>loading_cursor.style.display = None)

(async function() {                                  // <script src="js/asynchronous.js" defer> </script>
	try {                                            // if this code gives error try force reload - Ctrl + Shift + R
		const res = await asyncFunc();
		// console.log(res)
	} catch (err) {
		console.error(err);
	}
})();

// top-level(only inside module) await is synchronous(blocks the module code execution)
// try{                                             // <script type="module" src="js/asynchronous.js" defer> </script>
//     const res = await asyncFunc()                    // as, await is only valid in async functions and the top-level bodies of modules
//     console.log(res);
// }catch(err){
//     console.error(err);
// }