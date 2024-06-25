// Step 83
// Once you complete that, use let to declare a continueLoop variable and assign it the boolean false. Then use let to declare a done variable and assign it the value 0.

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

let continueLoop = false;
let done = 0;

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
