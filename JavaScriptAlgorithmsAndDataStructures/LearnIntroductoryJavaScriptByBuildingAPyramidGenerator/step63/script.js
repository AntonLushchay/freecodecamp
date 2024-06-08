// Step 63
// Use the addition operator to concatenate a blank space " " to the beginning and end of your repeated character string.

const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return ' ' + character.repeat(rowNumber) + ' ';
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
