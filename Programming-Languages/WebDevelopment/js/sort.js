const
    stringArr = [`Patil`, `Ankit`, `Rajendra`],
    numArr = [112, -232, 434, 12, 3, 2];

const
    sortedStringArr = stringArr.slice().sort(),
    sortedNumArr = numArr.slice().sort();
console.log(numArr);
console.log(sortedNumArr);
console.log(stringArr);
console.log(sortedStringArr);

const sortedNumberArr = numArr.slice().sort((a,b)=>a-b);
console.log(numArr);
console.log(sortedNumberArr);

const revereseSortedNumberArr = numArr.slice().sort((a,b)=>b-a);
console.log(numArr);
console.log(revereseSortedNumberArr);