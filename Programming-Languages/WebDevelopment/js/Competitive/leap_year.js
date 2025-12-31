const year = 1000;

console.log(year % 4);
console.log(year % 100);
console.log(year % 400);

if (year % 4 == 0 && year % 100 != 0)
    console.log("%d is a Leap year. divisible by 4 but not 100 as 1000 is divisi", year);
else if (year % 400 == 0)
    console.log("%d is a Leap year. divisible by 400", year);
else
    console.log("%d is a not Leap year.", year);

