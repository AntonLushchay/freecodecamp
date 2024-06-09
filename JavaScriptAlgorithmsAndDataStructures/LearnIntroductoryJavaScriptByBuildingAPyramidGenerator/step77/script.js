// Step 77
// Below your if statement, add an else if statement that checks if 5 is less than 10. Then inside the body of the else if statement, log the string "5 is less than 10" to the console.

const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return (
        ' '.repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        ' '.repeat(rowCount - rowNumber)
    );
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if ('') {
    console.log('Condition is true');
} else if (5 < 10) {
    console.log('5 is less than 10');
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
