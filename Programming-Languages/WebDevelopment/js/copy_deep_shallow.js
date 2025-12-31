const person = {
	"name": "Ankit",
	"age": 23,
	"family": ["Rajendra", "Bharti"]
};
console.log("person", person);
console.log();

// reference copy 
// 		- objCopy will be pointing to the same heap memory location of obj.
const person_reference_copy = person;
console.log("person_reference_copy", person_reference_copy);
console.log();

person_reference_copy.age = 24;
console.log("person_reference_copy", person_reference_copy);
console.log("person", person);
console.log();

// shallow copy 	
// 		- as only first level properties are copied, to also copy a nested object we can use 'lodash' module using npm.
// if any obj property is nested object, that property will be pointing to the same memory location for both the obj and objCopy.
//  i.e. obj.nestedObj.flag == objCopy.nestedObj.flag
person.age = 23;
const person_shallow_copy1 = {...person};
console.log("person_shallow_copy1", person_shallow_copy1);
console.log();

person_shallow_copy1.age = 24;
person_shallow_copy1.family.push("Nikita");
console.log("person_shallow_copy1", person_shallow_copy1);
console.log("person", person);
console.log();

person.family = ["Rajendra", "Bharti"];
const person_shallow_copy2 = Object.assign({}, person);
console.log("person_shallow_copy2", person_shallow_copy2);
console.log();

person_shallow_copy2.age = 24;
person_shallow_copy2.family.push("Nikita");
console.log("person_shallow_copy2", person_shallow_copy2);
console.log("person", person);
console.log();

// deep copy/clone
// 		- as all properties are copied(not heap memory location), i.e. also copy a nested objects.
// if any property is object, that property will be copied in objCopy. i.e. obj.nestedObj & objCopy.nestedObj will be pointing to different heap memory location
person.family = ["Rajendra", "Bharti"];
const person_deep_clone = structuredClone(person);
console.log("person_deep_clone", person_deep_clone);
console.log();

person_deep_clone.age = 24;
person_deep_clone.family.push("Nikita");
console.log("person_deep_clone", person_deep_clone);
console.log("person", person);
console.log();
