function column(rows) {
    for (let i = 0; i < rows; i++)
        console.log("*");

    console.log();

    for (let i = 1; i <= rows; i++)
        console.log(i);

    console.log();

    for (let i = rows; i > 0; i--)
        console.log(i);
    console.log();
}
console.log('column;');
column(2);


function row(columns) {
    for (let i = 0; i < columns; i++)
        process.stdout.write("*");

    console.log("\n");

    for (let i = 1; i <= columns; i++)
        process.stdout.write(`${i}`);

    console.log("\n");

    for (let i = columns; i > 0; i--)
        process.stdout.write(`${i}`);
    console.log('\n');
}
console.log('row;');
row(2);


function square(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++)
            process.stdout.write("*");
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    let incrementer = 1;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            process.stdout.write(`${incrementer++}`);
        }
        console.log();
    }

    console.log();

    let decrementer = rows * columns;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            process.stdout.write(`${decrementer--}`);
        }
        console.log();
    }
    console.log();
}
console.log('square;');
square(2, 2);


function rightside_right_angled_triangle(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++)
            process.stdout.write("*");
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    let incrementer = 1;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${incrementer++}`);
        }
        console.log();
    }
    console.log();

    let decrementer = (rows * (rows + 1)) / 2;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${decrementer--}`);
        }
        console.log();
    }
    console.log();
}
console.log('rightside_right_angled_triangle;');
rightside_right_angled_triangle(3);


function inverted_rightside_right_angled_traingle(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = rows; j > i; j--)
            process.stdout.write("*");
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; --i) {
        for (let j = 1; j <= i; ++j)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; --i) {
        for (let j = 1; j <= i; ++j)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    let incrementer = 1;
    for (let i = rows; i > 0; --i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`${incrementer++}`);
        }
        console.log();
    }

    console.log();

    let decrementer = (rows * (rows + 1)) / 2;
    for (let i = rows; i > 0; --i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`${decrementer--}`);
        }
        console.log();
    }
    console.log();
}
console.log('inverted_rightside_right_angled_traingle;');
inverted_rightside_right_angled_traingle(3);


function leftside_right_angled_triangle(rows) {
    for (let i = 0; i < rows; i++) {
        for (let k = rows - 1; k > i; k--)
            process.stdout.write(" ");
        for (let j = 0; j <= i; j++)
            process.stdout.write("*");
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let k = rows - 1; k >= i; k--)
            process.stdout.write(" ");
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let k = 1; k > (2 - i); k--)
            process.stdout.write(" ");
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${i}`);
        console.log();
    }

    console.log();

    for (let i = 1; i <= rows; i++) {
        for (let k = rows - 1; k >= i; k--)
            process.stdout.write(" ");
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    for (let i = rows; i > 0; i--) {
        for (let k = 1; k > (2 - i); k--)
            process.stdout.write(" ");
        for (let j = rows; j >= i; j--)
            process.stdout.write(`${j}`);
        console.log();
    }

    console.log();

    let incrementer = 1;
    for (let i = 1; i <= rows; i++) {
        for (let k = rows - 1; k >= i; k--)
            process.stdout.write(" ");
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${incrementer++}`);
        console.log();
    }

    console.log();

    let decrementer = (rows * (rows + 1)) / 2; // (rows*(rows+1))/2
    for (let i = 1; i <= rows; i++) {
        for (let k = rows - 1; k >= i; k--)
            process.stdout.write(" ");
        for (let j = 1; j <= i; j++)
            process.stdout.write(`${decrementer--}`);
        console.log();
    }
    console.log();
}
console.log('leftside_right_angled_triangle;');
leftside_right_angled_triangle(3);


function inverted_leftside_right_angled_traingle(rows) {
    for (let i = rows; i > 0; i--) {
        for (let k = 0; k < (rows - i); k++)
            process.stdout.write(" ");
        for (let j = 0; j < i; j++)
            process.stdout.write("*");
        console.log();
    }
    console.log();
}
console.log('inverted_leftside_right_angled_traingle;');
inverted_leftside_right_angled_traingle(3);



function traingle(rows) {
    for (let i = 0; i < rows; i++) {
        for (let k = 1; k < (rows - i); k++)
            process.stdout.write(" ");
        for (let j = 0; j <= i * 2; j++)
            process.stdout.write("*");
        console.log();
    }
    console.log();
}
console.log('traingle;');
traingle(3);



function inverted_traingle(rows) {
    for (let i = rows; i > 0; i--) {
        for (let k = 0; k < (rows-i); k++)
            process.stdout.write(" ");
        for (let j = 1; j < (i * 2); j++)
            process.stdout.write("*");
        console.log();
    }
}
console.log('inverted_traingle;');
inverted_traingle(3);