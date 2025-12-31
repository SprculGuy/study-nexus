function outest() {
	var c = 3;
	function outer(b) {
		function inner() {
			console.log(a, b, c);
		}
		let a = 1;
		return inner;
	}
	return outer;
}

var a = 10;
var close = outest()("Hello World");
close();
