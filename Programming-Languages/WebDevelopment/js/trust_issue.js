console.log("start");
setTimeout(function callback() {
	console.log("callback");
}, 0);
console.log("end");

/*
O/P:
start
end
callback

Reason:
callback() will gets from callback-queue to call-stack by event-loop only after call-stack is empty(GEC pops off)
*/