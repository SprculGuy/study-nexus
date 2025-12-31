const arr = [1, 2, 4, 1, 3, 2];
const s = "my name is Ankit";
console.log(`there are ${new Set(arr).size} unique elements in array.`);
console.log(`there are ${new Set(s).size} unique characters in string.`); //11 { 'm', 'y', ' ', 'n', 'a', 'e', 'i', 's', 'A', 'k', 't' }