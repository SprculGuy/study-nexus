let day = 3;
let n = 11;

if (n > 7)
    n %= 7;

day -= n;

if (day < 0)
    day += 7;

switch (day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
}
