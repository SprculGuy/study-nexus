const oneWord = function (str){
    return str.replace(/ /g, '')
}
const upperFirstWord = function (str){
    const [firstWord, ...others] = str.split(" ")
    return [firstWord.toUpperCase(), ...others].join(" ")
}
const transformer = function (str, fn){             // higher order function - as taking function as argument
    console.log(`Original String ${str}`);
    console.log(`Transformed String ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`);       // name property is used on function threating it as object
}
transformer("JavaScript is Best!", upperFirstWord)  // passing function as value, CallBack Function - only invoked when needed
console.log();
transformer("JavaScript is Best!", oneWord)         // passing function as value