"use strict";
// ES 2015 Class Declaration
class Carcl {
	// Public Field (available on instance[not on prototype])
	need = "Transportation";
	// Private Field (available on instance[not on prototype], not accessible outside of class)
	#wheels = 4;        // should be defined inside class but outside of function
	#key;               // in case we need private variable initialization in a function, then we define private field in class 
	// and then initialize/assign value in that function

	// Static Public Field (available on Class)
	static isHorn = true;    // availabe only on class. i.e. Carcl.isHorn


	// Public Method
	getWheels() {
		console.log(this.#wheels);  // private class fields, only accessible inside of class
	}
	// Private Methods
	#pinVerifier() {
		console.log("pin varifired");
		return true;
	}
	constructor(make, speed) {      // Mandatory method, will automatically executes when new object created using 'new' keyword
		this.make = make;
		this.speed = speed;          // calls setter
		this.#key = "user defined key to start vehicle";
	}
	// Instance methods added to .prototype property of objects created from class Carcl
	start() {
		if (this.#pinVerifier()) console.log("start the vehicle");
		return this;         // this allows method chaining
	}
	accelerate() {
		if (!this.hasOwnProperty("_speed")) this.speed = 100;
		else this.speed += 10;
	}
	break() {
		this.speed -= 10;
	}
	// setting the property that already exists. 
	set speed(speed) {               // obj.speed will be replaced with obj._speed (if speed > 100), otherwise obj.speed return undefined
		if (speed >= 100) {this._speed = speed;}        // we need to create this._speed as this.speed will invoke getter/setter
		else {console.log(`too slow to be a car`);}
	}
	// getter method
	get speed() {                   // need to write getter as 'this.speed' will replaced with 'this._speed' (only if speed>100)
		return this._speed;          // we need to create this._speed as this.speed will invoke getter/setter
	}

	// static method does not get added in .prototype property of objects created from class Carcl
	static horn() {        // static Method. Only availabe for class Carcl, not for objects created with that class Carcl
		if (Carcl.isHorn) console.log('honk!');       // i.e. obj.horn() will give error, CLass.horn() will not
	}                      // static method only access static fields and static methods inside it, instance method/properties not accessible
}
const lambergini = new Carcl("lambergini", 110);
console.log("lambergini", lambergini);
// tata.#wheels()                  gives error as Private field '##wheels' must be declared in an enclosing class
lambergini.getWheels();
const tata = new Carcl("tata", 90);      // setter executes in constructor from the constructor
console.log("tata", tata);               // will not have _speed property
// tata.#pinVerifier()             gives error as Private field '#pinVerifier' must be declared in an enclosing class
console.log(tata._speed);           // prints undefined because of setter
tata.start().accelerate();       // method chaining
console.log(tata._speed);
Carcl.horn();
class Evcl1 extends Carcl {
	constructor(make, speed, isCharged) {
		// always needs to call super at start of constructor() to create 'this' value so we can use this afterwords
		super(make, speed);             // constructor function of parent class
		this.isCharged = isCharged;
	}

}
const tesla1 = new Evcl1("Tesla", 120, false);
console.log("tesla1", tesla1);
class Evcl2 extends Carcl {
	// if constructor() is not defined, super(make, speed) is defaultly get call
}
const tesla2 = new Evcl2("Tesla", 120);
console.log("tesla2", tesla2);



// Constructor Functions with Protoypal Inheritance
const Car = function(make, speed) {
	this.make = make;
	this.speed = speed;
};
Car.prototype.accelerate = function() {
	this.speed += 10;
};
Car.prototype.break = function() {
	this.speed -= 10;
};
Car.prototype.wheels = 4;
Car.horn = function() {        // static function. Only availabe for constructur function(Car), not objects created with that constructor function
	console.log('honk!');       // i.e. bmw.horn() will give error
};
const bmw = new Car("BMW", 120);
const lexus = new Car("lexus", 95);
console.log("bmw", bmw.speed);
bmw.accelerate();
console.log("bmw", bmw.speed);
Car.horn();
// bmw.horn()       gives error
const Ev = function(make, speed, isCharged) {
	Car.call(this, make, speed);
	this.isCharged = isCharged;
};
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.charging = function() {
	this.isCharged = true;
};
Ev.prototype.accelerate = function() {           // Polimorphism(same function available in Parent class)
	if (this.isCharged) this.speed += 20;
};
console.dir(Ev.prototype.constructor);      // pointing to Car because of "Ev.prototype = Object.create(Car.prototype)", 
// but it should be pointing to Ev 
Ev.prototype.constructor = Ev;               // To fix above we change the constructor value manually
console.dir(Ev.prototype.constructor);
const nexon = new Ev("Tata", 120, false);
console.log("nexon", nexon.speed);
nexon.accelerate();      // inheritance -> Ev.prototype = Object.create(Car.prototype)
console.log("nexon", nexon.speed);



// Object.create() create new object from object defined via litral
const Caroc = {
	initFunc(make, speed) {
		this.make = make;
		this.speed = speed;
	}
};
const hyundai = new Car("BMW", 120);
console.log("hyundai", hyundai.speed);
hyundai.accelerate();
console.log("hyundai", hyundai.speed);
console.log("hyundai", hyundai);
const Evoc = Object.create(Caroc);       // creates a new object(Evoc) with prototype assigned with Caroc(Parent object)
Evoc.initFunc = function(make, speed, isCharged) {
	Caroc.initFunc.call(this, make, speed);
	this.isCharged = isCharged;
};
Evoc.charging = function() {
	this.isCharged = true;
};
const ionic = Object.create(Evoc);   // creates a new object(ionic) with prototype assigned with Child(Evoc) and Child(Evoc) objects prototype is Parent(Caroc). Inheritance
console.log("ionic", ionic);
ionic.initFunc("Hyundai", 130, false);
console.log("ionic", ionic);
ionic.charging();
console.log("ionic", ionic);

